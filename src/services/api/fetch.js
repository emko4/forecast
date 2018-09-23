import _ from 'lodash';
import { encode } from 'querystring';

import ApiError from '../errors/apiError';
import { getParamString, getParamObject, parametrize, getJsonResult } from './helpers/fetch';

export default function (...params) {
    // default request options
    const reqOptions = _.merge({
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        mode: 'cors',
    }, ..._.map(params, (p) => (_.omit(p, ['uri', 'body', 'formData', 'uriParams', 'qs']))));

    let uri = getParamString(params, 'uri');
    const body = getParamObject(params, 'body');
    const formData = getParamString(params, 'formData');
    const uriParams = getParamObject(params, 'uriParams');
    const qs = getParamObject(params, 'qs');

    if (!_.isEmpty(body)) {
        reqOptions.body = JSON.stringify(body);
    }

    if (formData) {
        reqOptions.body = formData;
        reqOptions.headers = _.omit(reqOptions.headers, ['Content-Type', 'Accept']);
    }

    if (!_.isEmpty(uriParams)) {
        uri = parametrize(uri, uriParams);
    }

    if (!_.isEmpty(qs)) {
        uri = `${uri}?${encode(qs)}`;
    }

    // eslint-disable-next-line no-undef
    return fetch(uri, reqOptions).then((_response) => {
        if (!_response.ok) {
            throw new ApiError(_response.statusText, null, _response.status, _response, uri);
        }

        if (_response.headers.get('content-type') && _response.headers.get('content-type').indexOf('json') > -1) {
            return getJsonResult(_response);
        }

        return _response;
    }).catch((_err) => {
        if (_.isFinite(_err.code)) throw _err;
        throw new ApiError(null, null, 500, null, uri);
    });
}

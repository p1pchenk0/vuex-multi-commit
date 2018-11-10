import Vuex from 'vuex'

const originalCommitFn = Vuex.Store.prototype.commit

Vuex.Store.prototype.commit = function commit(_type, _payload, _options) {
    if (Array.isArray(_type)) {
        for (var i = 0, len = _type.length; i < len; i++) {
            typeof _type[i] === 'string'
                ? originalCommitFn.call(this, _type[i], undefined, _options)
                : commit.call(this, _type[i])
        }
    } else if (_type.toString() === '[object Object]') {
        for (var type in _type) {
            originalCommitFn.call(this, type, _type[type], _options);
        }
    } else {
        originalCommitFn.call(this, _type, _payload, _options);
    }
}
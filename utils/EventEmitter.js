/** 
 * 简版事件处理类 
 */
class EventEmitter {
  constructor() {
    this.$_listeners = {};
  }

  on(name, callback, scope = null) {
    this.$_listeners[name] = this.$_listeners[name] || [];
    if ( scope !== null) callback['_scope'] = scope;
    this.$_listeners[name].push(callback);
  }

  off(name, callback) {
    const listeners = this.$_listeners[name];

    if (Array.isArray(listeners)) {
      const index = listeners.indexOf(callback);
      if (index === -1) return;
      listeners.splice(index, 1);
    }
  }

  trigger(name, params = null) {
    const listeners = this.$_listeners[name];

    if (Array.isArray(listeners)) {
       if (listeners.length <= 0) return;
       listeners.forEach(cb => {
         if (cb && cb instanceof Function) {
           const scope = cb['_scope'];
           if (scope === null) {
             (params === null) ? cb() : cb(params);
           } else {
              (params === null) ? cb.call(scope) : cb.call(scope, params);
           }
         } 
       });
    }
  }

}
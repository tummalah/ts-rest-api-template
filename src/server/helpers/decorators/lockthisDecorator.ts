// eslint-disable-next-line @typescript-eslint/ban-types
export function lockThis<T extends { new(...args: any[]): {} }>(constructor: T) {
    let self: any;
    const locker = class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        self = this;
      }
    };
    const proto = constructor.prototype;
    Object.getOwnPropertyNames(proto).forEach(key => {
    
      if (key === 'constructor') {
        return;
      }
      const descriptor = Object.getOwnPropertyDescriptor(proto, key);
      if (descriptor && typeof descriptor.value === 'function') {
        const original = descriptor.value;
        locker.prototype[key] = (...a: any[]) => original.apply(self, a);
      }
    });
    return locker;
  }
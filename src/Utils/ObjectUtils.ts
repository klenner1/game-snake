export class ObjectUtils {
  static clone<T>(obj: T): T {
    const cloneObj = { ...obj } as any;
    cloneObj.__proto__ = (obj as any).__proto__;
    return cloneObj;
  }
}
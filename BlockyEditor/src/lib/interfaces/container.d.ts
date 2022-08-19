export interface IContainer<T>{
    add(child: T)
    remove(child: T)
}
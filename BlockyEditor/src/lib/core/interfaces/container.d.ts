export interface IContainer<T>{
    children: Array<T>
    add(child: T)
    remove(child: T)
}
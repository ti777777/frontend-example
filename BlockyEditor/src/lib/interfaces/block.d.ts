export interface IBlock {
  id: string
  read(): any;
  draw(): HTMLElement;
}

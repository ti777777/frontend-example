import { IModule } from './../core/interfaces/module.d';
export class Module implements IModule{

    private static instance: Module;

    constructor(){}

    initialize(): void {
        throw new Error('Method not implemented.');
    }

    public static getInstance(): Module {
        if (!Module.instance) {
            Module.instance = new Module();
        }

        return Module.instance;
    }
}
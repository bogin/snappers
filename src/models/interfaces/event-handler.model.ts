export interface EventHandler { 
    name: string; 
    handler: (...args: (string | number)[]) => void;
}
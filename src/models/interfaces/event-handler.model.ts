export interface EventHandler { 
    name: string; 
    handler: (...args: string[]) => void;
}
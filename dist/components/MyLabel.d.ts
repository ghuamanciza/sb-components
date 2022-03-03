/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Descripción que se va a colocar como etiqueta
     */
    label: string;
    /**
     * Tamaño de la etiqueta que puede ser: normal, h1, h2 y h3, solo esas alternativas.
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Si quiere todo el texto de la etiqueta en mayúsculas
     */
    allCaps: boolean;
    /**
     * Si quiere cambiar los colores de la etiqueta
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Si quiere cambiar el color de la fuente
     */
    fontColor?: string;
    /**
     * Si quiere cambiar el color de fondo de la fuente
     */
    backgroundColor?: string;
}
/**
 * Label UI component para mostrar una etiqueta acompañando al lado de otro componente
 */
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;

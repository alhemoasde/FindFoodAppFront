export interface DonacionIf {
    donaciones: Donacion[];
}

export interface Donacion {
    id:           string;
    donante:      string;
    beneficiario: null | string;
    fecha:        string;
    descripcion:  string;
    estado:       string;
}
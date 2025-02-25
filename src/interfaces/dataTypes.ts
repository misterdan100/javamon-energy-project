export interface DataType {
    energias:        Energia[];
    datosTiempoReal: DatosTiempoReal;
    unidades:        Unidades;
}

export interface DatosTiempoReal {
    produccion: Consumo[];
    consumo:    Consumo[];
}

export interface Consumo {
    timestamp:     Date;
    tipoEnergia:   TipoEnergia;
    consumoKW?:    number;
    departamento:  string;
    ciudad:        string;
    produccionKW?: number;
}

export enum TipoEnergia {
    Biocombustibles = "Biocombustibles",
    Eólica = "Eólica",
    Geotérmica = "Geotérmica",
    Hidroeléctrica = "Hidroeléctrica",
    Solar = "Solar",
}

export interface Energia {
    id:                           string;
    tipoEnergia:                  TipoEnergia;
    region:                       string;
    departamento:                 string;
    ciudad:                       string;
    altitud:                      number;
    clima:                        string;
    eficiencia:                   number;
    costoImplementacion:          number;
    ganancias:                    number;
    costoMantenimiento:           number;
    descripcion:                  string;
    capacidadInstalada:           number;
    area:                         number;
    fuenteAgua?:                  string;
    turbinas?:                    Aerogeneradore[];
    impactoAmbiental:             ImpactoAmbiental;
    empleosDirectos:              number;
    empleosIndirectos:            number;
    produccionAnualEstimada:      number;
    consumoAnualEstimadoLocal:    number;
    vidaUtil:                     number;
    tecnologia:                   string;
    propietario:                  string;
    estado:                       Estado;
    velocidadVientoPromedio?:     number;
    direccionVientoPredominante?: string;
    aerogeneradores?:             Aerogeneradore[];
    irradianciaSolarAnual?:       number;
    panelesSolares?:              Aerogeneradore[];
    materiaPrima?:                string;
    tipoBiocombustible?:          string;
    temperaturaFuente?:           number;
    profundidadPozos?:            number;
}

export interface Aerogeneradore {
    marca:            string;
    modelo:           string;
    cantidad:         number;
    potenciaUnitaria: number;
}

export enum Estado {
    EnConstrucción = "En construcción",
    EnExploración = "En exploración",
    EnPlaneación = "En planeación",
    Operativo = "Operativo",
}

export enum ImpactoAmbiental {
    Alto = "Alto",
    Bajo = "Bajo",
    Moderado = "Moderado",
}

export interface Unidades {
    altitud:                   string;
    eficiencia:                string;
    costoImplementacion:       string;
    ganancias:                 string;
    costoMantenimiento:        string;
    capacidadInstalada:        string;
    area:                      string;
    empleosDirectos:           string;
    empleosIndirectos:         string;
    produccionAnualEstimada:   string;
    consumoAnualEstimadoLocal: string;
    vidaUtil:                  string;
    velocidadVientoPromedio:   string;
    potenciaUnitaria:          string;
    irradianciaSolarAnual:     string;
    temperaturaFuente:         string;
    profundidadPozos:          string;
}

// types.ts
export interface Prato {
    id: number;
    categoria: string;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    ingredientes: string[];
  }
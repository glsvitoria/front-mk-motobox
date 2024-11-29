export interface Moto {
  ano: string;
  categoria: string;
  cilindrada: number;
  cor: string;
  documentId: string;
  freioDianteiro: string;
  freioTraseiro: string;
  id: number;
  marca: string;
  marchas: number;
  modelo: string;
  quilometragem: number;
  valor: number;

  imagem: {
    id: string;
    url: string;
  }[];

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

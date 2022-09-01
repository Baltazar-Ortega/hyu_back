import mongoose from "mongoose";
import Producto from "../models/Producto";
import CategoriaGeneral from "../models/CategoriaGeneral";
import Subcategoria from "../models/Subcategoria";
import Tipo from "../models/Tipo";
import UnidadMedida from "../models/UnidadMedida";
import Oferta from "../models/Oferta";
import Descargable from "../models/Descargable";

export const Query = {
  ping: () => {
    return "pong!";
  },
  productos: async () => {
    return await Producto.find();
  },
  categorias_generales: async () => {
    return await CategoriaGeneral.find();
  },
  subcategorias: async () => {
    return await Subcategoria.find();
  },
  tipos: async () => {
    return await Tipo.find();
  },
  unidades_de_medida: async () => {
    return await UnidadMedida.find();
  },
  ofertas: async () => {
    return await Oferta.find();
  },
  descargables: async () => {
    return await Descargable.find()
  },
  descargablePorId: async (_, {_id_descargable}) => {
    const idDescargable = mongoose.Types.ObjectId(_id_descargable);
    return await Descargable.findById(idDescargable)
  },
  productoPorId: async (_, { _id }) => {
    const idProducto = mongoose.Types.ObjectId(_id);
    return await Producto.findById(idProducto);
  },
  productoPorSlug: async (_, { slug }) => {
    return await Producto.findOne({ slug: slug });
  },
  categoriaGeneralPorId: async (_, { _id_categoria_general }) => {
    const idCategoriaGeneral = mongoose.Types.ObjectId(_id_categoria_general);
    return await CategoriaGeneral.findById(idCategoriaGeneral);
  },
};

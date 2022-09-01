export const typeDefs = `
  type Query {
    ping: String!
    productos: [Producto!]!
    categorias_generales: [CategoriaGeneral!]!
    subcategorias: [Subcategoria!]!
    tipos: [Tipo!]!
    unidades_de_medida: [UnidadMedida!]!
    ofertas: [Oferta!]
    descargables: [Descargable!]
    descargablePorId(_id_descargable: ID!): Descargable
    productoPorId(_id: ID!): Producto
    productoPorSlug(slug: String!): Producto
    categoriaGeneralPorId(_id_categoria_general: ID!): CategoriaGeneral
  }

  type Mutation {
    createCategoriaGeneral(
      label: String!
      uri_label: ID!
      has_subcategorias: Boolean!
    ): CategoriaGeneral

    updateCategoriaGeneral(
      _id_categoria_general: ID!
      label: String!
      uri_label: String!
      has_subcategorias: Boolean!
    ): CategoriaGeneral

    deleteCategoriaGeneral(
      _id_categoria_general: ID!
    ): CategoriaGeneral

    createSubcategoria(
      _id_categoria_general: ID!
      label: String!
      uri_label: String!
      has_tipos: Boolean!
      _id_tipos: ID
    ): Subcategoria

    updateSubcategoria(
      _id_subcategoria: ID!
      _id_categoria_general: ID!
      label: String!
      uri_label: String!
      has_tipos: Boolean!
      _id_tipos: ID
    ): Subcategoria

    deleteSubcategoria(
      _id_subcategoria: ID!
    ): Subcategoria

    createProducto(
      _id_categoria_general: ID!
      nombre: String!
      slug: String!
      imagenUrl: String
      descripcion: String!
      compra_minima: Float!
      _id_unidad_de_medida: ID!
      has_subcategoria: Boolean!
      _id_subcategoria: ID
      tipo: String
      mostrar_precio: Boolean!
      precio: Float!
    ): Producto

    updateProducto(
      _id_producto: ID!

      _id_categoria_general: ID!
      nombre: String!
      slug: String!
      imagenUrl: String
      descripcion: String!
      compra_minima: Float!
      _id_unidad_de_medida: ID!
      has_subcategoria: Boolean!
      _id_subcategoria: ID
      tipo: String
      mostrar_precio: Boolean!
      precio: Float!
    ): Producto

    deleteProducto(
      _id_producto: ID!
    ): Producto

    createTipo(
      lista: [TipoValoresInput]!
      _id_subcategoria: ID!
      _id_categoria_general: ID!
    ): Tipo

    updateTipo(
      _id_tipo: ID!

      lista: [TipoValoresInput]!
      _id_subcategoria: ID!
      _id_categoria_general: ID!
    ): Tipo

    deleteTipo(
      _id_tipo: ID!
    ): Tipo

    createOferta(
      titulo: String!
      descripcion: String
      imagenUrl: String
      fecha_vencimiento: String!
      precio: Float!
    ): Oferta

    updateOferta(
      _id_oferta: ID!
      titulo: String!
      descripcion: String
      imagenUrl: String
      fecha_vencimiento: String!
      precio: Float!
    ): Oferta

    deleteOferta(
      _id_oferta: ID!
    ): Oferta

    createDescargable(
      nombre: String!
      archivo_url: String!
      fecha_subido: String!
      fecha_editado: String!
    ): Descargable

    updateDescargable(
      _id_descargable: ID!
      nombre: String!
      archivo_url: String!
      fecha_subido: String!
      fecha_editado: String!
    ): Descargable

    deleteDescargable(
      _id_descargable: ID!
    ): Descargable
  }

  type Producto {
    _id: ID!

    _id_categoria_general: ID!
    nombre: String!
    slug: String!
    imagenUrl: String
    descripcion: String!
    compra_minima: Float!
    _id_unidad_de_medida: ID!
    has_subcategoria: Boolean!
    tipo: String
    _id_subcategoria: ID
    mostrar_precio: Boolean!
    precio: Float!

    subcategoria: Subcategoria
    categoriaGeneral: CategoriaGeneral
    unidadMedida: UnidadMedida
  }

  type CategoriaGeneral {
    _id: ID!

    label: String!
    uri_label: String!
    has_subcategorias: Boolean!
  }

  type Subcategoria {
    _id: ID!

    label: String!
    uri_label: String!
    has_tipos: Boolean!
    _id_tipos: ID
    _id_categoria_general: ID!

  }

  type Tipo {
    _id: ID!

    lista: [TipoValores]!
    _id_subcategoria: ID!
    _id_categoria_general: ID!
  }

  type TipoValores {
    valor: String!
    label: String!
  }

  type UnidadMedida {
    _id: ID!
    nombre: String!
    nombre_singular: String!
    nombre_plural: String!
  }

  type Oferta {
    _id: ID!
    titulo: String!
    descripcion: String
    imagenUrl: String
    fecha_vencimiento: String!
    precio: Float!
  }

  type Descargable {
    _id: ID!
    nombre: String!
    archivo_url: String!
    fecha_subido: String!
    fecha_editado: String!
  }

  input TipoValoresInput {
    valor: String!
    label: String!
  }
  
  
`

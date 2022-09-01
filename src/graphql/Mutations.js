import { categoriaGeneralMutation } from "./Mutations/categoriaGeneralMutation"
import { descargableMutation } from "./Mutations/descargableMutation"
import { ofertaMutation } from "./Mutations/ofertaMutation"
import { productoMutation } from "./Mutations/productoMutation"
import { subcategoriaMutation } from "./Mutations/subcategoriaMutation"
import { tipoMutation } from "./Mutations/tipoMutation"

export const Mutation = {
    ...categoriaGeneralMutation,
    ...subcategoriaMutation,
    ...tipoMutation,
    ...productoMutation,
    ...ofertaMutation,
    ...descargableMutation
}
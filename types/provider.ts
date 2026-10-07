export type Provider = {
  id:number; slug:string; nombre_comercial:string; razon_social:string; tipo_proveedor:string; pais:string; estado:string; ciudad:string;
  website:string; tienda_online:string; instagram:string; facebook:string; tiktok:string; linkedin:string; whatsapp:string; telefono:string; email:string; direccion:string; google_maps:string;
  fabricacion_propia:string; producto_mexicano:string; venta_mayoreo:string; venta_menudeo:string; private_label:string; oem:string; personalizacion:string; desarrollo_disenos:string;
  moq:string; tiempo_produccion:string; capacidad_produccion:string; envios_nacionales:string; exportacion:string; productos:string[]; materiales:string[];
  precio_unitario:string; precio_mayoreo:string; descuento_volumen:string; rango_precios:string; score:number; nivel:string; confianza:string; motivo_recomendacion:string; observaciones:string;
  similitud_referencia_1:string; similitud_referencia_2:string; similitud_referencia_3:string; similitud_referencia_4:string; similitud_referencia_5:string; fuente_1:string; fuente_2:string;
}

const db = getFirestore();

        const itemsCollection = [
            {
                "id": "0001P",
                "name": "Ryzen 5 1600 AF",
                "brand": "AMD",
                "type": "processor",
                "core": 6,
                "threads": 12,
                "frecuency": 3200,
                "nanometters": 12,
                "price": 13050,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17898_Procesador_AMD_Ryzen_5_1600_AF_Zen__12nm_AM4_Wraith_Stealth_Cooler_187bb9ab-grn.jpg",
                "available": true,
                "apu": false,
                "quantity": 1,
                "tags": ["amd", "gaming", "ryzen"]
            }, {
                "id": "0002P",
                "name": "Ryzen 5 PRO 4650G",
                "brand": "AMD",
                "type": "processor",
                "core": 6,
                "threads": 12,
                "frecuency": 3700,
                "nanometters": 7,
                "price": 26070,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21462_Procesador_AMD_Ryzen_5_PRO_4650G_4.2GHz_Turbo___Wraith_Stealth_Cooler_OEM_52f8e46a-grn.jpg",
                "available": true,
                "apu": true,
                "quantity": 1,
                "tags": ["amd", "gaming", "ryzen", "apu"]
            }, {
                "id": "0003P",
                "name": "Pentium Gold G5400",
                "brand": "Intel",
                "type": "processor",
                "core": 2,
                "threads": 4,
                "frecuency": 3700,
                "nanometters": 14,
                "price": 7460,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8479_Procesador_Intel_Pentium_Gold_G5400_3.7_LGA_1151_8va_gen__1d9a0e9c-grn.jpg",
                "available": true,
                "apu": true,
                "quantity": 1,
                "tags": ["intel", "office", "pentium", "apu"]
            }, {
                "id": "0004P",
                "name": "i7 10700F",
                "brand": "Intel",
                "type": "processor",
                "core": 8,
                "threads": 16,
                "frecuency": 2900,
                "nanometters": 14,
                "price": 45980,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22503_Procesador_Intel_Core_i7_10700F_4.8GHz_Turbo_Socket_1200_Comet_Lake_b7e5628e-grn.jpg",
                "available": false,
                "apu": false,
                "quantity": 1,
                "tags": ["intel", "gaming", "i7"]
            },{
                "id": "0001V",
                "name": "GTX 1050 Ti",
                "manufacturer": "ASUS",
                "brand": "Nvidia",
                "type": "videocard",
                "memory": 4096,
                "typeMemory": "GDDR5",
                "interfaceMemory": 128,
                "consumption": 75,
                "price": 18390,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8497_Placa_de_Video_GeForce_ASUS_GTX_1050_Ti_4GB_DDR5_Phoenix_ee14e647-grn.jpg",
                "available": false,
                "quantity": 1,
                "tags": ["cheap", "nvidia", "gtx"]
            }, {
                "id": "0002V",
                "name": "RTX 3070",
                "manufacturer": "MSI",
                "brand": "Nvidia",
                "type": "videocard",
                "memory": 8192,
                "typeMemory": "GDDR6",
                "interfaceMemory": 256,
                "consumption": 220,
                "price": 156580,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23450_Placa_de_Video_MSI_GeForce_RTX_3070_8GB_GDDR6_VENTUS_X2_OC_75fa04fe-grn.jpg",
                "available": false,
                "quantity": 1,
                "tags": ["gaming", "nvidia", "rtx"]
            }, {
                "id": "0003V",
                "name": "Radeon RX 5500 XT",
                "manufacturer": "MSI",
                "brand": "AMD",
                "type": "videocard",
                "memory": 4096,
                "typeMemory": "GDDR6",
                "interfaceMemory": 128,
                "consumption": 130,
                "price": 35850,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23889_Placa_de_Video_MSI_Radeon_RX_5500_XT_4GB_GDDR6_MECH_OC_21a50966-grn.jpg",
                "available": true,
                "quantity": 1,
                "tags": ["gaming", "radeon", "rx"]
            }, {
                "id": "0004V",
                "name": "Radeon RX 6900 XT",
                "manufacturer": "XFX",
                "brand": "AMD",
                "type": "videocard",
                "memory": 16384,
                "typeMemory": "GDDR6",
                "interfaceMemory": 256,
                "consumption": 320,
                "price": 198860,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23666_Placa_de_Video_XFX_Radeon_RX_6900_XT_16GB_GDDR6_cec31148-grn.jpg",
                "available": false,
                "quantity": 1,
                "tags": ["gaming", "radeon", "rx"]
            },{
                "id": "0001M",
                "name": "Adata 4GB",
                "type":"memory",
                "capacity": 4096,
                "rate": 2666,
                "latency": 19,
                "price": 2670,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13221_Memoria_Adata_DDR4_4GB_2666MHz_Value__aa6df289-grn.jpg",
                "available": true,
                "quantity": 1,
                "tags": ["adata", "gaming"]
            
            }, {
                "id": "0002M",
                "name": "Adata 8GB",
                "type":"memory",
                "capacity": 8192,
                "rate": 3200,
                "latency": 16,
                "price": 5480,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12175_Memoria_Adata_DDR4_8GB_3200MHz_XPG_Spectrix_D80_RGB_Water_Cooler__88985fea-grn.jpg",
                "available": true,
                "quantity": 1,
                "tags": ["adata", "gaming"]
            },{
                "id": "0001C",
                "name": "Neo G",
                "type":"cabinet",
                "coolersCapacity": 5,
                "coolersIncluded": 2,
                "mother": "ATX",
                "price": 12100,
                "quantity": 1,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21374_Gabinete_Metallic_Gear_Neo_G_Series_ATX_Case_Black_c9afd56d-grn.jpg",
                "tags": ["gabinete", "gaming"]
            }, {
                "id": "0002C",
                "name": "Master Masterbox MB530P",
                "type":"cabinet",
                "coolersCapacity": 6,
                "coolersIncluded": 4,
                "mother": "ATX",
                "price": 29730,
                "quantity": 1,
                "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13197_Gabinete_Cooler_Master_Masterbox_MB530P_ARGB_3xVidrios_Templados_3x120mm_ARGB_Fans_atx_98a2ce35-grn.jpg",
                "tags": ["gabinete", "gaming"]
            }
        ]

        itemsCollection.forEach(item =>{ 
            if(item.type === 'processor'){
                db.collection('items').add({
                    id : item.id,
                    name : item.name,
                    brand : item.brand,
                    type : item.type,
                    core : item.core,
                    threads : item.threads,
                    frecuency : item.frecuency,
                    nanometters : item.nanometters,
                    price : item.price,
                    image : item.image,
                    apu : item.apu,
                    stock : 10
                }).then(ref=>{
                    console.log('Escrito con el id: '+ref.id)
                }).catch(error => console.log('Error: '+error))
            }else if(item.type === 'videocard'){
                db.collection('items').add({
                    id : item.id,
                    name : item.name,
                    brand : item.brand,
                    type : item.type,
                    manufacturer : item.manufacturer,
                    memory : item.memory,
                    typeMemory : item.typeMemory,
                    interfaceMemory : item.interfaceMemory,
                    price : item.price,
                    image : item.image,
                    consumption : item.consumption,
                    stock : 10
                }).then(ref=>{
                    console.log('Escrito con el id: '+ref.id)
                }).catch(error => console.log('Error: '+error))
            }else if(item.type === 'memory'){
                db.collection('items').add({
                    id : item.id,
                    name : item.name,
                    type : item.type,
                    capacity : item.capacity,
                    rate : item.rate,
                    latency : item.latency,
                    price : item.price,
                    image : item.image,
                    stock : 10
                }).then(ref=>{
                    console.log('Escrito con el id: '+ref.id)
                }).catch(error => console.log('Error: '+error))
            }else if(item.type === 'cabinet'){
                db.collection('items').add({
                    id : item.id,
                    name : item.name,
                    type : item.type,
                    coolersCapacity : item.coolersCapacity,
                    coolersIncluded : item.coolersIncluded,
                    mother : item.mother,
                    price : item.price,
                    image : item.image,
                    stock : 10
                }).then(ref=>{
                    console.log('Escrito con el id: '+ref.id)
                }).catch(error => console.log('Error: '+error))
            }
            

        })

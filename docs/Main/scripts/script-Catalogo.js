const Slider=document.getElementById("Slider-muestra"),Img_Backslide_1=document.createElement("img"),Img_Backslide_2=document.createElement("img"),Img_Backslide_3=document.createElement("img"),Img_Backslide_4=document.createElement("img"),Img_slider_info=document.getElementById("Img-ejemplo-slider"),Titulo_Info_slider=document.getElementById("Titulo-slider"),Parrafo_info_Slider=document.getElementById("Parrafo-Sider");let num_interval=5e3;Img_Backslide_1.src="/Main/img/Background-1.jpg",Img_Backslide_2.src="/Main/img/Background-2.jpg",Img_Backslide_3.src="/Main/img/Background-3.jpg",Img_Backslide_4.src="/Main/img/Background-4.jpg";const Source_plano_In="/Main/img/Img Catalogo/Planos Casas Infonavit/10.jpeg",Source_plano_Me="/Main/img/Img Catalogo/Planos Casas Infonavit/4.jpeg",Source_plano_Grand="/Main/img/Img Catalogo/Planos Casas Infonavit/Plano-Infonavit-15-x-10-mts.png",Source_plano_Resi="/Main/img/Img Catalogo/Planos Casas Infonavit/6.jpeg";function Remove_img_ult(){const e=Slider.lastChild;Slider.removeChild(e)}let i=0;function Img_list(){0===i?(Slider.children.length>1&&Remove_img_ult(),Img_Backslide_1.classList.add("Slider-imgs-width"),Slider.appendChild(Img_Backslide_1),Img_slider_info.src=Source_plano_In,Titulo_Info_slider.textContent="Casas de Interes Social",Parrafo_info_Slider.textContent="Perfecta para sus intereses principales. Contiene todos los servicios necesarios.",i++):1===i?(Slider.children.length>1&&Remove_img_ult(),Img_Backslide_2.classList.add("Slider-imgs-width"),Slider.appendChild(Img_Backslide_2),Img_slider_info.src=Source_plano_Me,Titulo_Info_slider.textContent="Casas Medianas",Parrafo_info_Slider.textContent="La mejor opción en cuanto a calidad precio.",i++):2===i?(Slider.children.length>1&&Remove_img_ult(),Img_Backslide_3.classList.add("Slider-imgs-width"),Slider.appendChild(Img_Backslide_3),Img_slider_info.src=Source_plano_Grand,Titulo_Info_slider.textContent="Casas Grandes",Parrafo_info_Slider.textContent="Mucha más comodidad. Tenga la seguridad de que es una buena inversión.",i++):3===i&&(Slider.children.length>1&&Remove_img_ult(),Img_Backslide_4.classList.add("Slider-imgs-width"),Slider.appendChild(Img_Backslide_4),Img_slider_info.src=Source_plano_Resi,Titulo_Info_slider.textContent="Casas Residenciales",Parrafo_info_Slider.textContent="Una casa hecha a su gusto y de la que nunca se querra apartar.",i=0)}Img_list(),setInterval(Img_list,num_interval);const Expositor_Plan_1=document.getElementById("Plans-expositor-1"),Expositor_Plan_2=document.getElementById("Plans-expositor-2"),Expositor_Plan_3=document.getElementById("Plans-expositor-3"),Expositor_Plan_4=document.getElementById("Plans-expositor-4"),Expositor_Plan_5=document.getElementById("Plans-expositor-5"),Expositor_Plan_6=document.getElementById("Plans-expositor-6"),Expositor_Plan_7=document.getElementById("Plans-expositor-7"),Expositor_Plan_8=document.getElementById("Plans-expositor-8"),Expositor_Plan_9=document.getElementById("Plans-expositor-9"),Expositor_Plan_10=document.getElementById("Plans-expositor-10"),Expositor_Plan_11=document.getElementById("Plans-expositor-11"),Expositor_Plan_12=document.getElementById("Plans-expositor-12"),Expositor_Plan_13=document.getElementById("Plans-expositor-13"),Expositor_Plan_14=document.getElementById("Plans-expositor-14"),Expositor_Plan_15=document.getElementById("Plans-expositor-15"),Expositor_Plan_16=document.getElementById("Plans-expositor-16"),Expositor_Plan_17=document.getElementById("Plans-expositor-17"),Expositor_Plan_18=document.getElementById("Plans-expositor-18"),Expositor_Plan_19=document.getElementById("Plans-expositor-19"),Expositor_Plan_20=document.getElementById("Plans-expositor-20"),Expositor_Plan_21=document.getElementById("Plans-expositor-21"),Expositor_Plan_22=document.getElementById("Plans-expositor-22"),Expositor_Plan_23=document.getElementById("Plans-expositor-23"),Expositor_Plan_24=document.getElementById("Plans-expositor-24"),Look_nexts_1=document.getElementById("Look-nexts-1"),Look_nexts_2=document.getElementById("Look-nexts-2"),Look_nexts_3=document.getElementById("Look-nexts-3"),Look_nexts_4=document.getElementById("Look-nexts-4"),Look_nexts_5=document.getElementById("Look-nexts-5"),Look_nexts_6=document.getElementById("Look-nexts-6");let Pixeles=document.documentElement.clientWidth;Pixeles<1024&&(Expositor_Plan_1.classList.add("Categories-Plans-ocult"),Expositor_Plan_2.classList.add("Categories-Plans-ocult"),Expositor_Plan_3.classList.add("Categories-Plans-ocult"),Expositor_Plan_4.classList.add("Categories-Plans-ocult"),Expositor_Plan_5.classList.add("Categories-Plans-ocult"),Expositor_Plan_6.classList.add("Categories-Plans-ocult"),Expositor_Plan_7.classList.add("Categories-Plans-ocult"),Expositor_Plan_8.classList.add("Categories-Plans-ocult"),Expositor_Plan_9.classList.add("Categories-Plans-ocult"),Expositor_Plan_10.classList.add("Categories-Plans-ocult"),Expositor_Plan_11.classList.add("Categories-Plans-ocult"),Expositor_Plan_12.classList.add("Categories-Plans-ocult"),Expositor_Plan_13.classList.add("Categories-Plans-ocult"),Expositor_Plan_14.classList.add("Categories-Plans-ocult"),Expositor_Plan_15.classList.add("Categories-Plans-ocult"),Expositor_Plan_16.classList.add("Categories-Plans-ocult"),Expositor_Plan_17.classList.add("Categories-Plans-ocult"),Expositor_Plan_18.classList.add("Categories-Plans-ocult"),Expositor_Plan_19.classList.add("Categories-Plans-ocult"),Expositor_Plan_20.classList.add("Categories-Plans-ocult"),Expositor_Plan_21.classList.add("Categories-Plans-ocult"),Expositor_Plan_22.classList.add("Categories-Plans-ocult"),Expositor_Plan_23.classList.add("Categories-Plans-ocult"),Expositor_Plan_24.classList.add("Categories-Plans-ocult"),Look_nexts_1.addEventListener("click",(()=>{Expositor_Plan_1.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_2.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_3.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_4.classList.toggle("Categories-Plans-ocult")})),Look_nexts_2.addEventListener("click",(()=>{Expositor_Plan_5.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_6.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_7.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_8.classList.toggle("Categories-Plans-ocult")})),Look_nexts_3.addEventListener("click",(()=>{Expositor_Plan_9.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_10.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_11.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_12.classList.toggle("Categories-Plans-ocult")})),Look_nexts_4.addEventListener("click",(()=>{Expositor_Plan_13.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_14.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_15.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_16.classList.toggle("Categories-Plans-ocult")})),Look_nexts_5.addEventListener("click",(()=>{Expositor_Plan_17.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_18.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_19.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_20.classList.toggle("Categories-Plans-ocult")})),Look_nexts_6.addEventListener("click",(()=>{Expositor_Plan_21.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_22.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_23.classList.toggle("Categories-Plans-ocult"),Expositor_Plan_24.classList.toggle("Categories-Plans-ocult")})),Look_nexts_1.addEventListener("click",(function(e){e.preventDefault()})),Look_nexts_2.addEventListener("click",(function(e){e.preventDefault()})),Look_nexts_3.addEventListener("click",(function(e){e.preventDefault()})),Look_nexts_4.addEventListener("click",(function(e){e.preventDefault()})),Look_nexts_5.addEventListener("click",(function(e){e.preventDefault()})),Look_nexts_6.addEventListener("click",(function(e){e.preventDefault()})));const Menu_emergente_Open=document.getElementById("Menu-emergente-image"),Menu_emergente=document.getElementById("Menu-emergente"),Body_scroll=document.getElementById("Body-scroll"),Menu_aside_hamburger=document.getElementById("Menu-aside-hamburger");Menu_emergente_Open.addEventListener("click",(()=>{Body_scroll.classList.toggle("body-scroll"),Menu_aside_hamburger.style.display="inline",Menu_emergente.style.display="inline",Menu_emergente.classList.toggle("Look-menu-emergente")}));
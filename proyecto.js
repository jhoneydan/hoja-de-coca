document.addEventListener('DOMContentLoaded', () => {
  const productos = [
    {
      nombre: "Té de coca",
      tipo: "Infusión",
      categoria: "infusion",
      descripcion: "Uno de los productos más tradicionales y conocidos. Se prepara con hojas secas o molidas para ser consumidas en infusiones.",
      uso: "Uso tradicional"
    },
    {
      nombre: "Masticado de coca",
      tipo: "Consumo directo",
      categoria: "masticado",
      descripcion: "La hoja se mastica de forma tradicional en varias comunidades andinas, asociada a costumbres culturales y de convivencia.",
      uso: "Uso cultural"
    },
    {
      nombre: "Infusión con hoja seca",
      tipo: "Preparación herbal",
      categoria: "infusion",
      descripcion: "Se usa la hoja triturada o seca en infusiones, como parte de prácticas tradicionales y de preparación casera.",
      uso: "Uso doméstico"
    },
    {
      nombre: "Extracto herbal de coca",
      tipo: "Extracto natural",
      categoria: "extracto",
      descripcion: "Presentación concentrada que se emplea en contextos tradicionales y de preparación alternativa.",
      uso: "Uso concentrado"
    },
    {
      nombre: "Cápsulas de cola de coca",
      tipo: "Presentación comercial",
      categoria: "capsulas",
      descripcion: "Algunas marcas ofrecen presentaciones encapsuladas, aunque su uso debe contextualizarse y manejarse con precaución.",
      uso: "Uso comercial"
    },
    {
      nombre: "Preparado para alivio tradicional",
      tipo: "Uso complementario",
      categoria: "infusion",
      descripcion: "En algunos contextos, se asocian hojas y mezclas a rutinas de bienestar, descanso o acompañamiento en actividades diarias.",
      uso: "Uso complementario"
    }
  ];

  const container = document.getElementById("productos-lista");
  const botones = document.querySelectorAll(".btn-producto");

  function renderProductos(categoria = "todos") {
    const filtrados = categoria === "todos"
      ? productos
      : productos.filter(producto => producto.categoria === categoria);

    container.innerHTML = filtrados.map(producto => `
      <article class="producto-card">
        <span class="tag">${producto.tipo}</span>
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span class="alerta">${producto.uso}</span>
      </article>
    `).join("");
  }

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      botones.forEach(btn => btn.classList.remove("activo"));
      boton.classList.add("activo");
      renderProductos(boton.dataset.categoria);
    });
  });

  renderProductos();

  const enlaces = document.querySelectorAll('.nav-link');
  const paneles = document.querySelectorAll('.panel');

  function mostrarPanel(id) {
    paneles.forEach(panel => {
      panel.classList.toggle('activo', panel.id === id);
    });

    enlaces.forEach(enlace => {
      const activo = enlace.getAttribute('href') === `#${id}`;
      enlace.classList.toggle('activo', activo);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', evento => {
      evento.preventDefault();
      mostrarPanel(enlace.getAttribute('href').slice(1));
    });
  });

  const primerPanel = window.location.hash?.slice(1);
  mostrarPanel(document.getElementById(primerPanel) ? primerPanel : 'inicio');
});
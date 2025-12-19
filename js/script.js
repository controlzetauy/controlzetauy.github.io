(() => {
  // Año en footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Animaciones al scrollear
  const targets = document.querySelectorAll(".animate-on-scroll");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });
  targets.forEach(t => io.observe(t));

  // Botón "Avisame"
  const btnAvisarme = document.getElementById("btnAvisarme");
  btnAvisarme?.addEventListener("click", async () => {
    await Swal.fire({
      icon: "info",
      title: "¡Gracias!",
      html: `
        <div style="text-align:left">
          <p>El sitio está en construcción. Podés escribirnos y te responderemos a la brevedad.</p>
          <p class="mb-0"><strong>Email:</strong> control.zeta.uy@gmail.com</p>
          <p class="mb-0"><strong>Teléfono:</strong> 094 420 086</p>
        </div>
      `,
      confirmButtonText: "Entendido"
    });
  });

  // Botón "Detalles"
  const btnDetalles = document.getElementById("btnDetalles");
  btnDetalles?.addEventListener("click", () => {
    Swal.fire({
      icon: "question",
      title: "¿Qué estamos preparando?",
      html: `
        <ul style="text-align:left; margin:0; padding-left:18px">
          <li>Presentación de servicios</li>
          <li>Portafolio de proyectos</li>
          <li>Formulario de contacto</li>
          <li>Optimización para móviles</li>
        </ul>
      `,
      confirmButtonText: "¡Genial!"
    });
  });

  // Copiar email
  const btnCopiarMail = document.getElementById("btnCopiarMail");
  btnCopiarMail?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("control.zeta.uy@gmail.com");
      Swal.fire({ icon: "success", title: "Copiado", text: "Email copiado al portapapeles." });
    } catch (e) {
      Swal.fire({ icon: "warning", title: "No se pudo copiar", text: "Copiá manualmente: control.zeta.uy@gmail.com" });
    }
  });

  // WhatsApp
  const btnWhatsApp = document.getElementById("btnWhatsApp");
  btnWhatsApp?.addEventListener("click", () => {
    const phone = "59894420086"; // Uruguay: 598 + número sin 0
    const msg = "Hola, quiero consultar por servicios de Control Zeta.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  });
})();

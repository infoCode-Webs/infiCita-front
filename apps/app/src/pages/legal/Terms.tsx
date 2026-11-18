
import './Terms.css'

// Logo
import Logo from '../../assets/images/logos/infiCita-logo.png'

const sections = [
  { id: 'generalidades', title: '1. Información general' },
  { id: 'aceptacion', title: '2. Aceptación de los términos' },
  { id: 'plataforma', title: '3. Sobre infiCita' },
  { id: 'registro', title: '4. Registro y cuentas' },
  { id: 'uso', title: '5. Uso de la plataforma' },
  { id: 'responsabilidades', title: '6. Responsabilidades' },
  { id: 'disponibilidad', title: '7. Disponibilidad del servicio' },
  { id: 'propiedad', title: '8. Propiedad intelectual' },
  { id: 'cancelacion', title: '9. Suspensión y cancelación' },
  { id: 'modificaciones', title: '10. Modificaciones' },
  { id: 'contacto', title: '11. Contacto' },
]

function Terms() {
  return (
    <main className="terms-page">

      {/* Encabezado */}
      <header className="terms-header">
        <div className="terms-header-container">
          <a href="/registro" className="terms-brand">
            <img src={Logo} alt="infiCita" />
          </a>

          <nav className="terms-header-nav">
            <a href="/registro">Crear cuenta</a>
            <a href="/login">Iniciar sesión</a>
          </nav>
        </div>
      </header>

      {/* Presentación */}
      <section className="terms-hero">
        <div className="terms-hero-container">
          <span className="terms-eyebrow">INFORMACIÓN LEGAL</span>

          <h1>Términos y condiciones</h1>

          <p>
            Conoce las condiciones que regulan el acceso y uso de
            infiCita, nuestra plataforma de gestión de citas.
          </p>

          <div className="terms-meta">
            <span>Última actualización: pendiente</span>
            <span className="terms-meta-divider" />
            <span>Tiempo de lectura: 8 minutos</span>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="terms-content-section">
        <div className="terms-layout">

          {/* Índice */}
          <aside className="terms-sidebar">
            <div className="terms-sidebar-card">
              <h2>Contenido</h2>

              <nav>
                {sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className="terms-sidebar-footer">
                <p>¿Tienes alguna pregunta?</p>
                <a href="mailto:contacto@inficode.co">
                  Contáctanos
                </a>
              </div>
            </div>
          </aside>

          {/* Documento */}
          <article className="terms-document">

            <div className="terms-introduction">
              <p>
                Bienvenido a infiCita. Estos términos y condiciones
                establecen las reglas generales para el acceso y uso
                de nuestra plataforma.
              </p>

              <p>
                Te recomendamos leer cuidadosamente este documento
                antes de registrarte o utilizar nuestros servicios.
              </p>
            </div>

            <section id="generalidades" className="terms-section">
              <h2>1. Información general</h2>
              <p>
                infiCita es una plataforma digital orientada a facilitar
                la organización y gestión de citas profesionales.
                Estos términos regulan las condiciones generales de uso
                de la plataforma.
              </p>
            </section>

            <section id="aceptacion" className="terms-section">
              <h2>2. Aceptación de los términos</h2>
              <p>
                El acceso, registro o utilización de infiCita implica
                que el usuario ha leído y comprende estos términos.
                Al crear una cuenta, el usuario manifiesta su aceptación
                de las condiciones aplicables.
              </p>
            </section>

            <section id="plataforma" className="terms-section">
              <h2>3. Sobre infiCita</h2>
              <p>
                infiCita es un producto digital desarrollado bajo la
                marca infiCode. Su finalidad es ofrecer herramientas
                para facilitar la administración de citas y la
                organización de la actividad profesional.
              </p>
            </section>

            <section id="registro" className="terms-section">
              <h2>4. Registro y cuentas</h2>
              <p>
                Para utilizar las funcionalidades destinadas a
                profesionales, es necesario crear una cuenta y
                proporcionar información veraz, actualizada y completa.
              </p>
            </section>

            <section id="uso" className="terms-section">
              <h2>5. Uso de la plataforma</h2>
              <p>
                Los usuarios se comprometen a utilizar infiCita
                de manera responsable, conforme a la legislación
                aplicable y a las condiciones establecidas en este
                documento.
              </p>
            </section>

            <section id="responsabilidades" className="terms-section">
              <h2>6. Responsabilidades</h2>
              <p>
                Cada profesional es responsable de la información
                que registra y de la gestión de su actividad profesional.
                El uso de la plataforma no sustituye las obligaciones
                legales o profesionales de cada usuario.
              </p>
            </section>

            <section id="disponibilidad" className="terms-section">
              <h2>7. Disponibilidad del servicio</h2>
              <p>
                Se realizarán esfuerzos razonables para mantener
                disponible la plataforma. Sin embargo, pueden presentarse
                interrupciones por mantenimiento, actualizaciones o
                circunstancias técnicas ajenas a nuestro control.
              </p>
            </section>

            <section id="propiedad" className="terms-section">
              <h2>8. Propiedad intelectual</h2>
              <p>
                Los elementos propios de infiCita, incluyendo su diseño,
                identidad visual, estructura y componentes, están
                protegidos por las normas aplicables de propiedad
                intelectual.
              </p>
            </section>

            <section id="cancelacion" className="terms-section">
              <h2>9. Suspensión y cancelación</h2>
              <p>
                Podrán establecerse medidas de suspensión o cancelación
                de cuentas cuando exista un incumplimiento de estos
                términos o un uso indebido de la plataforma, conforme
                a las condiciones que se definan para el servicio.
              </p>
            </section>

            <section id="modificaciones" className="terms-section">
              <h2>10. Modificaciones</h2>
              <p>
                Estos términos podrán actualizarse cuando existan
                cambios en la plataforma, sus funcionalidades o las
                disposiciones legales aplicables. Las modificaciones
                serán comunicadas por los medios correspondientes.
              </p>
            </section>

            <section id="contacto" className="terms-section">
              <h2>11. Contacto</h2>
              <p>
                Si tienes preguntas relacionadas con estos términos,
                podrás comunicarte con nosotros a través de los
                canales de contacto oficiales de infiCita.
              </p>
            </section>

            <div className="terms-document-end">
              <span>infiCita</span>
              <p>Tu tiempo importa. Nosotros te ayudamos a organizarlo.</p>
            </div>

          </article>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="terms-footer">
        <div className="terms-footer-container">
          <span>© {new Date().getFullYear()} infiCita. Todos los derechos reservados.</span>

          <nav>
            <a href="/terminos">Términos y condiciones</a>
            <a href="/privacidad">Política de privacidad</a>
          </nav>
        </div>
      </footer>

    </main>
  )
}

export default Terms


    import './Privacy.css'

    // Logo
    import Logo from '../../assets/images/logos/infiCita-logo.png'

    const sections = [
    { id: 'responsable', title: '1. Responsable del tratamiento' },
    { id: 'datos', title: '2. Datos personales recopilados' },
    { id: 'finalidades', title: '3. Finalidades del tratamiento' },
    { id: 'sensibles', title: '4. Datos sensibles' },
    { id: 'citas', title: '5. Gestión de citas' },
    { id: 'seguridad', title: '6. Seguridad de la información' },
    { id: 'conservacion', title: '7. Conservación de los datos' },
    { id: 'derechos', title: '8. Derechos de los titulares' },
    { id: 'reclamos', title: '9. Consultas y reclamos' },
    { id: 'modificaciones', title: '10. Modificaciones' },
    { id: 'contacto', title: '11. Contacto' },
    ]

    function Privacy() {
    return (
        <main className="privacy-page">

        {/* Encabezado */}
        <header className="privacy-header">
            <div className="privacy-header-container">
            <a href="/registro" className="privacy-brand">
                <img src={Logo} alt="infiCita" />
            </a>

            <nav className="privacy-header-nav">
                <a href="/registro">Crear cuenta</a>
                <a href="/login">Iniciar sesión</a>
            </nav>
            </div>
        </header>

        {/* Presentación */}
        <section className="privacy-hero">
            <div className="privacy-hero-container">
            <span className="privacy-eyebrow">INFORMACIÓN LEGAL</span>

            <h1>Política de privacidad</h1>

            <p>
                Tu información merece cuidado y transparencia.
                Conoce cómo recopilamos, utilizamos y protegemos
                tus datos personales en infiCita.
            </p>

            <div className="privacy-meta">
                <span>Última actualización: pendiente</span>
                <span className="privacy-meta-divider" />
                <span>Tiempo de lectura: 10 minutos</span>
            </div>
            </div>
        </section>

        {/* Contenido */}
        <section className="privacy-content-section">
            <div className="privacy-layout">

            {/* Índice */}
            <aside className="privacy-sidebar">
                <div className="privacy-sidebar-card">
                <h2>Contenido</h2>

                <nav>
                    {sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`}>
                        {section.title}
                    </a>
                    ))}
                </nav>

                <div className="privacy-sidebar-footer">
                    <p>¿Tienes alguna inquietud sobre tus datos?</p>
                    <a href="mailto:contacto@inficode.co">
                    Contáctanos
                    </a>
                </div>
                </div>
            </aside>

            {/* Documento */}
            <article className="privacy-document">

                <div className="privacy-introduction">
                <p>
                    En infiCita reconocemos la importancia de proteger
                    la privacidad y los datos personales de quienes
                    utilizan nuestra plataforma.
                </p>

                <p>
                    Esta política explica cómo se realiza el tratamiento
                    de la información personal, cuáles son sus finalidades
                    y qué derechos tienen sus titulares.
                </p>

                <p>
                    El tratamiento de datos personales se realizará
                    conforme a la legislación colombiana aplicable,
                    especialmente la Ley 1581 de 2012 y sus normas
                    reglamentarias.
                </p>
                </div>

                <section id="responsable" className="privacy-section">
                <h2>1. Responsable del tratamiento</h2>
                <p>
                    infiCita es un producto digital desarrollado y
                    gestionado bajo la marca infiCode por Miguel Ángel
                    y Adrián Fonseca, personas naturales.
                </p>
                <p>
                    La identificación completa de los responsables
                    y los canales oficiales para ejercer los derechos
                    relacionados con los datos personales se incorporarán
                    antes de la publicación definitiva de esta política.
                </p>
                </section>

                <section id="datos" className="privacy-section">
                <h2>2. Datos personales recopilados</h2>
                <p>
                    Dependiendo de las funcionalidades utilizadas,
                    infiCita podrá tratar información necesaria para
                    el registro y funcionamiento de las cuentas
                    profesionales.
                </p>
                <p>
                    Esta información podrá incluir datos de identificación,
                    nombres, apellidos, correo electrónico, número de
                    teléfono y datos relacionados con la configuración
                    de la cuenta profesional.
                </p>
                <p>
                    También podrán tratarse datos necesarios para la
                    organización y gestión de citas, de acuerdo con
                    las funcionalidades habilitadas en la plataforma.
                </p>
                </section>

                <section id="finalidades" className="privacy-section">
                <h2>3. Finalidades del tratamiento</h2>
                <p>
                    Los datos personales podrán utilizarse para:
                </p>
                <ul>
                    <li>Crear y administrar cuentas de usuario.</li>
                    <li>Permitir el acceso y funcionamiento de la plataforma.</li>
                    <li>Facilitar la organización y gestión de citas.</li>
                    <li>Enviar comunicaciones relacionadas con el servicio.</li>
                    <li>Atender solicitudes, consultas y requerimientos.</li>
                    <li>Mejorar la seguridad y el funcionamiento de infiCita.</li>
                </ul>
                </section>

                <section id="sensibles" className="privacy-section">
                <h2>4. Tratamiento de datos sensibles</h2>
                <p>
                    Algunos datos relacionados con la salud pueden
                    tener la consideración de datos sensibles conforme
                    a la legislación colombiana.
                </p>
                <p>
                    En caso de que alguna funcionalidad de infiCita
                    implique el tratamiento de esta clase de información,
                    se establecerán las medidas, autorizaciones y
                    condiciones legales correspondientes.
                </p>
                <p>
                    No se debe utilizar la plataforma para registrar
                    información clínica o terapéutica que no esté
                    expresamente contemplada en sus funcionalidades
                    y condiciones de uso.
                </p>
                </section>

                <section id="citas" className="privacy-section">
                <h2>5. Gestión de citas</h2>
                <p>
                    La información asociada a la programación de citas
                    podrá tratarse para facilitar la organización de
                    los horarios y la administración de las reservas
                    entre profesionales y sus pacientes o clientes.
                </p>
                <p>
                    Los profesionales deberán asegurarse de contar
                    con la autorización o base legal correspondiente
                    para compartir información personal de terceros
                    a través de la plataforma.
                </p>
                </section>

                <section id="seguridad" className="privacy-section">
                <h2>6. Seguridad de la información</h2>
                <p>
                    Se adoptarán medidas técnicas, humanas y
                    administrativas razonables para proteger los
                    datos personales frente a accesos no autorizados,
                    pérdida, alteración o uso indebido.
                </p>
                <p>
                    Estas medidas podrán revisarse y actualizarse
                    conforme evolucione la plataforma.
                </p>
                </section>

                <section id="conservacion" className="privacy-section">
                <h2>7. Conservación de los datos</h2>
                <p>
                    La información personal se conservará durante
                    el tiempo necesario para cumplir las finalidades
                    del tratamiento y las obligaciones legales aplicables.
                </p>
                <p>
                    Los procedimientos de eliminación, anonimización
                    o conservación de la información se definirán
                    conforme a las características del servicio.
                </p>
                </section>

                <section id="derechos" className="privacy-section">
                <h2>8. Derechos de los titulares</h2>
                <p>
                    Los titulares de datos personales podrán ejercer
                    los derechos reconocidos por la legislación colombiana,
                    entre ellos:
                </p>
                <ul>
                    <li>Conocer, actualizar y rectificar sus datos personales.</li>
                    <li>Solicitar prueba de la autorización otorgada.</li>
                    <li>Conocer el uso que se ha dado a sus datos.</li>
                    <li>Presentar consultas y reclamos.</li>
                    <li>Solicitar la revocatoria de la autorización o supresión de datos cuando proceda legalmente.</li>
                    <li>Acceder gratuitamente a sus datos personales.</li>
                </ul>
                </section>

                <section id="reclamos" className="privacy-section">
                <h2>9. Consultas y reclamos</h2>
                <p>
                    Los titulares podrán presentar consultas o reclamos
                    relacionados con el tratamiento de sus datos
                    personales a través de los canales oficiales
                    que se habiliten para este propósito.
                </p>
                <p>
                    Las solicitudes serán atendidas conforme a los
                    procedimientos y plazos establecidos en la
                    legislación colombiana.
                </p>
                </section>

                <section id="modificaciones" className="privacy-section">
                <h2>10. Modificaciones de esta política</h2>
                <p>
                    Esta política podrá actualizarse cuando existan
                    cambios en las funcionalidades de infiCita,
                    las operaciones de tratamiento o las disposiciones
                    legales aplicables.
                </p>
                <p>
                    La versión vigente estará disponible para su
                    consulta a través de la plataforma.
                </p>
                </section>

                <section id="contacto" className="privacy-section">
                <h2>11. Contacto</h2>
                <p>
                    Para consultas relacionadas con esta política
                    o el tratamiento de datos personales, podrás
                    comunicarte con los responsables a través
                    de los canales oficiales de infiCita.
                </p>
                </section>

                <div className="privacy-document-end">
                <span>infiCita</span>
                <p>Tu privacidad también importa.</p>
                </div>

            </article>
            </div>
        </section>

        {/* Pie de página */}
        <footer className="privacy-footer">
            <div className="privacy-footer-container">
            <span>
                © {new Date().getFullYear()} infiCita. Todos los derechos reservados.
            </span>

            <nav>
                <a href="/terminos">Términos y condiciones</a>
                <a href="/privacidad">Política de privacidad</a>
            </nav>
            </div>
        </footer>

        </main>
    )
    }

    export default Privacy

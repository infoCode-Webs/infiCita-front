
    import { useState, type FormEvent } from 'react'
    import './Login.css'

    // Recursos visuales
    import Logo from '../../assets/images/logos/infiCita-claro.png'
    import Calendario from '../../assets/images/calendario-register.webp'

    // Iconos
    import Email from '../../assets/icons/mail.svg'
    import Candado from '../../assets/icons/lock-keyhole.svg'
    import Ojo from '../../assets/icons/eye.svg'
    import OjoCerrado from '../../assets/icons/eye-off.svg'
    import Seguridad from '../../assets/icons/Shield-check.svg'
    import IniciarSesion from '../../assets/icons/log-in.svg'

    // Iconos reutilizables
    const icons = {
    email: Email,
    lock: Candado,
    eye: Ojo,
    eyeOff: OjoCerrado,
    security: Seguridad,
    login: IniciarSesion,
    }

    function Icon({
    name,
    className = '',
    }: {
    name: keyof typeof icons
    className?: string
    }) {
    return (
        <img
        src={icons[name]}
        className={`field-icon ${className}`}
        alt=""
        aria-hidden="true"
        />
    )
    }

    function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [rememberSession, setRememberSession] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError(
        'El inicio de sesión estará disponible cuando conectemos el backend.',
        )
    }

    return (
        <main className="login-page">
        {/* PANEL IZQUIERDO */}
        <section className="login-sidebar">
            {/* Figuras decorativas de fondo */}
            <div className="login-sidebar-decorations" aria-hidden="true">
            <span className="login-sidebar-shape login-shape-one" />
            <span className="login-sidebar-shape login-shape-two" />
            <span className="login-sidebar-shape login-shape-three" />
            <span className="login-sidebar-shape login-shape-four" />
            <span className="login-sidebar-shape login-shape-five" />
            </div>

            <div className="login-sidebar-brand">
            <img src={Logo} alt="infiCita" />
            </div>

            <div className="login-sidebar-content">
            <div className="login-sidebar-message">
                <h2>
                Nos alegra
                <span>tenerte de vuelta.</span>
                </h2>

                <p>
                Accede a tu espacio profesional y continúa gestionando tus citas
                de manera sencilla.
                </p>
            </div>

            <div className="login-sidebar-illustration">
                <img
                src={Calendario}
                alt="Calendario y reloj de infiCita"
                />
            </div>
            </div>

            <div className="login-sidebar-footer">
            <span className="login-footer-line" />

            <div className="login-footer-message">
                <Icon name="security" className="login-security-icon" />

                <p>
                Tu tiempo importa. Nosotros te ayudamos a organizarlo.
                </p>
            </div>
            </div>
        </section>

        {/* PANEL DERECHO */}
        <section className="login-content">
            <div className="login-container">
            {/* ENCABEZADO */}
            <header className="login-header">
                <h1>Bienvenido de nuevo</h1>

                <p>Ingresa tus datos para acceder a tu cuenta.</p>
            </header>

            <div className="register-link">
                ¿Todavía no tienes una cuenta?{' '}
                <a href="/registro">Regístrate</a>
            </div>

            {/* FORMULARIO */}
            <form className="login-form" onSubmit={handleSubmit}>
                {/* CORREO */}
                <div className="login-field">
                <label htmlFor="loginEmail">
                    Correo electrónico <span>*</span>
                </label>

                <div className="login-input-wrapper">
                    <Icon name="email" />

                    <input
                    type="email"
                    id="loginEmail"
                    name="email"
                    placeholder="nombre@ejemplo.com"
                    autoComplete="email"
                    required
                    />
                </div>
                </div>

                {/* CONTRASEÑA */}
                <div className="login-field">
                <label htmlFor="loginPassword">
                    Contraseña <span>*</span>
                </label>

                <div className="login-input-wrapper">
                    <Icon name="lock" />

                    <input
                    type={showPassword ? 'text' : 'password'}
                    id="loginPassword"
                    name="password"
                    placeholder="Ingresa tu contraseña."
                    autoComplete="current-password"
                    required
                    />

                    <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                        showPassword
                        ? 'Ocultar contraseña'
                        : 'Mostrar contraseña'
                    }
                    >
                    <Icon name={showPassword ? 'eye' : 'eyeOff'} />
                    </button>
                </div>
                </div>

                {/* RECORDAR SESIÓN Y RECUPERAR CONTRASEÑA */}
                <div className="login-options">
                <label className="remember-session">
                    <input
                    type="checkbox"
                    checked={rememberSession}
                    onChange={(event) =>
                        setRememberSession(event.target.checked)
                    }
                    />

                    <span>Recordar mi sesión</span>
                </label>

                <a href="/recuperar-contrasena">
                    ¿Olvidaste tu contraseña?
                </a>
                </div>

                {/* BOTÓN DE INICIO DE SESIÓN */}
                <button type="submit" className="login-button">
                <Icon name="login" />
                <span>Iniciar sesión</span>
                </button>

                {/* MENSAJE DE VALIDACIÓN */}
                {error && (
                <p className="login-feedback" role="alert">
                    {error}
                </p>
                )}

                {/* AVISO LEGAL */}
                <div className="login-legal">
                <p>
                    Al continuar, aceptas nuestros{' '}
                    <a href="/terminos">Términos y condiciones</a> y nuestra{' '}
                    <a href="/privacidad">Política de privacidad</a>.
                </p>
                </div>
            </form>
            </div>
        </section>
        </main>
    )
    }

    export default Login

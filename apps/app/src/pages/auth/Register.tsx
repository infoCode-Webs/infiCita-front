
    import { useEffect, useRef, useState, type FormEvent } from 'react'
    import './Register.css'

    // Recursos visuales
    import Logo from '../../assets/images/logos/infiCita-claro.png'
    import Calendario from '../../assets/images/calendario-register.webp'

    // Iconos
    import Usuario from '../../assets/icons/user-round.svg'
    import UsuarioPlus from '../../assets/icons/user-round-plus.svg'
    import Ojo from '../../assets/icons/eye.svg'
    import OjoCerrado from '../../assets/icons/eye-off.svg'
    import Info from '../../assets/icons/info.svg'
    import Candado from '../../assets/icons/lock-keyhole.svg'
    import Email from '../../assets/icons/mail.svg'
    import Telefono from '../../assets/icons/phone.svg'
    import Seguridad from '../../assets/icons/Shield-check.svg'

    // Países disponibles para el teléfono
    const countries = [
    { name: 'Colombia', code: '+57', flag: '🇨🇴', placeholder: 'XXX XXX XXXX', digits: 10 },
    { name: 'Venezuela', code: '+58', flag: '🇻🇪', placeholder: 'XXX-XXX-XXXX', digits: 10 },
    { name: 'México', code: '+52', flag: '🇲🇽', placeholder: 'XXX XXX XXXX', digits: 10 },
    { name: 'Argentina', code: '+54', flag: '🇦🇷', placeholder: 'XXX XXX XXXX', digits: 10 },
    { name: 'Chile', code: '+56', flag: '🇨🇱', placeholder: 'X XXXX XXXX', digits: 9 },
    { name: 'Perú', code: '+51', flag: '🇵🇪', placeholder: 'XXX XXX XXX', digits: 9 },
    { name: 'Ecuador', code: '+593', flag: '🇪🇨', placeholder: 'XX XXX XXXX', digits: 9 },
    { name: 'Brasil', code: '+55', flag: '🇧🇷', placeholder: 'XX XXXXX XXXX', digits: 11 },
    { name: 'Bolivia', code: '+591', flag: '🇧🇴', placeholder: 'XXXX XXXX', digits: 8 },
    { name: 'Paraguay', code: '+595', flag: '🇵🇾', placeholder: 'XXX XXX XXX', digits: 9 },
    { name: 'Uruguay', code: '+598', flag: '🇺🇾', placeholder: 'XX XXX XXX', digits: 8 },
    { name: 'Estados Unidos', code: '+1', flag: '🇺🇸', placeholder: 'XXX XXX XXXX', digits: 10 },
    { name: 'Canadá', code: '+1', flag: '🇨🇦', placeholder: 'XXX XXX XXXX', digits: 10 },
    { name: 'España', code: '+34', flag: '🇪🇸', placeholder: 'XXX XXX XXX', digits: 9 },
    { name: 'Reino Unido', code: '+44', flag: '🇬🇧', placeholder: 'XXXX XXXXXX', digits: 10 },
    { name: 'Alemania', code: '+49', flag: '🇩🇪', placeholder: 'XXX XXXXXXXX', digits: 11 },
    { name: 'Francia', code: '+33', flag: '🇫🇷', placeholder: 'X XX XX XX XX', digits: 9 },
    { name: 'Italia', code: '+39', flag: '🇮🇹', placeholder: 'XXX XXX XXXX', digits: 10 },
    ]

    // Iconos reutilizables
    const icons = {
    user: Usuario,
    userPlus: UsuarioPlus,
    eye: Ojo,
    eyeOff: OjoCerrado,
    info: Info,
    lock: Candado,
    email: Email,
    phone: Telefono,
    security: Seguridad,
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

    function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [acceptedTerms, setAcceptedTerms] = useState(false)

    const [countryName, setCountryName] = useState('Colombia')
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState('')

    const countryDropdownRef = useRef<HTMLDivElement>(null)

    const selectedCountry =
        countries.find((country) => country.name === countryName) ?? countries[0]

    // Cerrar el selector al hacer clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (
            countryDropdownRef.current &&
            !countryDropdownRef.current.contains(event.target as Node)
        ) {
            setCountryDropdownOpen(false)
        }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Validaciones de los campos
    const validFirstName = firstName.trim().length >= 2
    const validLastName = lastName.trim().length >= 2

    const validEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim())

    const phoneDigits = phone.replace(/\D/g, '')
    const validPhone = phoneDigits.length === selectedCountry.digits

    const validPassword = password.length >= 8
    const passwordsMatch =
        confirmPassword.length > 0 && password === confirmPassword

    const isFormValid =
        validFirstName &&
        validLastName &&
        validEmail &&
        validPhone &&
        validPassword &&
        passwordsMatch &&
        acceptedTerms

    const handleCountrySelect = (country: (typeof countries)[number]) => {
        setCountryName(country.name)
        setPhone('')
        setCountryDropdownOpen(false)
        setError('')
    }

    const handlePhoneChange = (value: string) => {
        const onlyDigits = value.replace(/\D/g, '')
        setPhone(onlyDigits.slice(0, selectedCountry.digits))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError('')

        if (!isFormValid) {
        setError('Revisa los campos e intenta nuevamente.')
        return
        }

        setError(
        'Formulario validado. La conexión con el backend está pendiente.',
        )
    }

    return (
        <main className="register-page">
        {/* PANEL IZQUIERDO */}
        <section className="register-sidebar">
            <div className="sidebar-decorations" aria-hidden="true">
            <span className="sidebar-shape shape-one" />
            <span className="sidebar-shape shape-two" />
            <span className="sidebar-shape shape-three" />
            <span className="sidebar-shape shape-four" />
            <span className="sidebar-shape shape-five" />
            </div>

            <div className="sidebar-brand">
            <img src={Logo} alt="infiCita" />
            </div>

            <div className="sidebar-content">
            <div className="sidebar-message">
                <h2>
                Tus citas, más organizadas.
                <span>Tu tiempo, mejor aprovechado.</span>
                </h2>

                <p>
                Crea tu cuenta en infiCita y comienza a gestionar tus
                reservas profesionales desde un solo lugar.
                </p>
            </div>

            <div className="sidebar-illustration">
                <img
                src={Calendario}
                alt="Calendario y reloj de infiCita"
                />
            </div>
            </div>

            <div className="sidebar-footer">
            <span className="footer-line" />

            <div className="footer-message">
                <Icon name="security" className="security-icon" />

                <p>
                Una herramienta creada para simplificar tu día a día.
                </p>
            </div>
            </div>
        </section>

        {/* PANEL DERECHO */}
        <section className="register-content">
            <div className="register-container">
            <header className="register-header">
                <h1>Crea tu cuenta</h1>

                <p>
                Comienza a utilizar infiCita registrando tus datos.
                </p>
            </header>

            <div className="login-link">
                ¿Ya tienes una cuenta?{' '}
                <a href="/login">Inicia sesión</a>
            </div>

            {/* FORMULARIO */}
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                {/* NOMBRE */}
                <div className="form-field">
                    <label htmlFor="firstName">
                    Nombre <span>*</span>
                    </label>

                    <div className="input-wrapper">
                    <Icon name="user" />

                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Tu nombre"
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                    />
                    </div>
                </div>

                {/* APELLIDOS */}
                <div className="form-field">
                    <label htmlFor="lastName">
                    Apellidos <span>*</span>
                    </label>

                    <div className="input-wrapper">
                    <Icon name="user" />

                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Tus apellidos"
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                    />
                    </div>
                </div>

                {/* CORREO */}
                <div className="form-field full-width">
                    <label htmlFor="email">
                    Correo electrónico <span>*</span>
                    </label>

                    <div className="input-wrapper">
                    <Icon name="email" />

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="nombre@ejemplo.com"
                        autoComplete="email"
                        value={emailAddress}
                        onChange={(event) => setEmailAddress(event.target.value)}
                        required
                    />
                    </div>
                </div>

                {/* TELÉFONO */}
                <div className="form-field full-width">
                    <label htmlFor="phone">
                    Número de teléfono <span>*</span>
                    </label>

                    <div className="phone-group">
                    {/* SELECTOR PERSONALIZADO DE PAÍS */}
                    <div className="country-select" ref={countryDropdownRef}>
                        <button
                        type="button"
                        className="country-select-trigger"
                        onClick={() =>
                            setCountryDropdownOpen(!countryDropdownOpen)
                        }
                        aria-expanded={countryDropdownOpen}
                        aria-haspopup="listbox"
                        aria-label={`País seleccionado: ${selectedCountry.name}, ${selectedCountry.code}`}
                        >
                        <span className="country-flag" aria-hidden="true">
                            {selectedCountry.flag}
                        </span>

                        <span className="country-code">
                            {selectedCountry.code}
                        </span>

                        <span
                            className={`country-chevron ${
                            countryDropdownOpen ? 'is-open' : ''
                            }`}
                            aria-hidden="true"
                        >
                            ▾
                        </span>
                        </button>

                        {countryDropdownOpen && (
                        <div
                            className="country-dropdown"
                            role="listbox"
                            aria-label="Seleccionar país"
                        >
                            {countries.map((country) => (
                            <button
                                key={country.name}
                                type="button"
                                className={`country-option ${
                                country.name === countryName ? 'selected' : ''
                                }`}
                                role="option"
                                aria-selected={country.name === countryName}
                                onClick={() => handleCountrySelect(country)}
                            >
                                <span className="country-option-flag">
                                {country.flag}
                                </span>

                                <span className="country-option-name">
                                {country.name}
                                </span>

                                <span className="country-option-code">
                                {country.code}
                                </span>
                            </button>
                            ))}
                        </div>
                        )}

                        <input
                        type="hidden"
                        name="countryCode"
                        value={selectedCountry.code}
                        />
                    </div>

                    <div className="input-wrapper phone-input">
                        <Icon name="phone" />

                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder={selectedCountry.placeholder}
                        autoComplete="tel-national"
                        inputMode="numeric"
                        value={phone}
                        onChange={(event) =>
                            handlePhoneChange(event.target.value)
                        }
                        required
                        />
                    </div>
                    </div>
                </div>

                {/* CONTRASEÑA */}
                <div className="form-field full-width">
                    <label htmlFor="password">
                    Contraseña <span>*</span>
                    </label>

                    <div className="input-wrapper">
                    <Icon name="lock" />

                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Crea una contraseña"
                        autoComplete="new-password"
                        minLength={8}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />

                    <button
                        type="button"
                        className="password-toggle"
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

                    <div className="field-hint">
                    <Icon name="info" />
                    <span>Mínimo 8 caracteres</span>
                    </div>
                </div>

                {/* CONFIRMAR CONTRASEÑA */}
                <div className="form-field full-width">
                    <label htmlFor="confirmPassword">
                    Confirmar contraseña <span>*</span>
                    </label>

                    <div className="input-wrapper">
                    <Icon name="lock" />

                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Repite tu contraseña"
                        autoComplete="new-password"
                        minLength={8}
                        value={confirmPassword}
                        onChange={(event) =>
                        setConfirmPassword(event.target.value)
                        }
                        required
                    />

                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                        }
                        aria-label={
                        showConfirmPassword
                            ? 'Ocultar contraseña'
                            : 'Mostrar contraseña'
                        }
                    >
                        <Icon
                        name={showConfirmPassword ? 'eye' : 'eyeOff'}
                        />
                    </button>
                    </div>
                </div>
                </div>

                {/* TÉRMINOS Y CONDICIONES */}
                <div className="terms-container">
                <input
                    type="checkbox"
                    id="terms"
                    checked={acceptedTerms}
                    onChange={(event) =>
                    setAcceptedTerms(event.target.checked)
                    }
                />

                <label htmlFor="terms">
                    He leído y acepto los{' '}
                    <a href="/terminos">Términos y condiciones</a>
                    {' '}y la{' '}
                    <a href="/privacidad">Política de privacidad</a>
                    {' '}de infiCita.
                </label>
                </div>

                {/* MENSAJE DE VALIDACIÓN */}
                {error && (
                <p className="form-feedback" role="alert">
                    {error}
                </p>
                )}

                {/* BOTÓN DE REGISTRO */}
                <button
                type="submit"
                className="register-button"
                disabled={!isFormValid}
                >
                <Icon name="userPlus" />
                <span>Crear mi cuenta</span>
                </button>

                <p className="register-note">
                Al crear tu cuenta podrás configurar tu perfil profesional
                y comenzar a recibir reservas.
                </p>
            </form>
            </div>
        </section>
        </main>
    )
    }

    export default Register

'use client'

import Link from 'next/link'
import styles from '../css/signup.module.css'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Signupform = ({signup}) => {
    const PasswordInput = ({placeholder}) => {
        const [showPassword, setShowPassword] = useState(false);
        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword);
        };

        return (
            <div className={styles.input}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={`${placeholder}`} 
                />
                <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        );
    };

    // 

    return (
        <div className={styles.container}>
          {signup ? (
            <div>
                <p className={styles.title}>Crear Cuenta</p>
                <form action="submit" className={styles.form}>
                    <input className={styles.input} type="email" placeholder='E-mail' />
                    <PasswordInput placeholder="Contraseña" />
                    <PasswordInput placeholder="Confirmar Contraseña" />
                </form>
                <div className={styles.buttons}>
                    <button className={styles.button}> Google</button>
                    <button className={`${styles.button} ${styles.continuar}`}>Continuar</button>
                </div>
                <p>¿Ya tienes una cuenta? <Link href="/" className='link'>Iniciar Sesión</Link></p>
            </div>
          ) : (
            <div>
                <p className={styles.title}>Iniciar Sesión</p>
                <form action="submit" className={styles.form}>
                    <input className={styles.input} type="email" placeholder='E-mail' />
                    <PasswordInput  placeholder="Contraseña"/>
                </form>
                <div className={styles.buttons}>
                    <button className={styles.button}> Google</button>
                    <button className={`${styles.button} ${styles.continuar}`}>Continuar</button>
                </div>
                <p>¿No tienes una cuenta? <Link href="/" className='link'>Registrarme</Link></p>
            </div>
          )}
          {/* Resto del código... */}
        </div>
      );
};

export default Signupform;

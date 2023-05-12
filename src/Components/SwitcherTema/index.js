import React from "react";
import ThemeOn from ' ../../assets/images/themmeOn.svg';
import ThemeOff from ' ../../assets/images/themmeOff.svg';
import {Icone} from '../UI';

const claro = <Icone src={ThemeOn} alt="Tema Claro" />;
const escuro = <Icone src={ThemeOff} alt="Tema Escuro" />;

export default ({tema}) => (tema ? escuro : claro);
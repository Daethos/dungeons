import React, { useState, useEffect } from "react";
import { useParams, Navigate, useLocation } from 'react-router-dom';
import * as monstersAPI from '../../utils/monsterApi';
import Loading from "../Loading/Loading";
import SolaMonstra from "../SolaMonstra/SolaMonstra";
import MonsterCard from "../MonsterCard/MonsterCard";
import AddMonster from '../AddMonster/AddMonster';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


export default function EditFunctions() {


    function handleSpeed(e) {
        const { name, value }  = e.target;
        editState.speed[name] = value;
        setEditState({...editState})
    }

    function handleSenses(e) {
        e.preventDefault();
        const { name, value }  = e.target;
        editState.senses[name] = value;
        setEditState({...editState})
    }

    function handleConditionImmunities(e) {
        const { name, value }  = e.target;
        editState.condition_immunities[name].name = value;
        setEditState({...editState})
    }

    function handleDamageImmunities(e) {
        const { name, value }  = e.target;
        editState.damage_immunities[name] = value;
        setEditState({...editState})
    }

    function handleDamageResistances(e) {
        const { name, value }  = e.target;
        editState.damage_resistances[name] = value;
        setEditState({...editState})
    }

    function handleDamageVulberabilities(e) {
        const { name, value }  = e.target;
        editState.damage_vulnerabilities[name] = value;
        setEditState({...editState})
    }

    function handleProficiencyName(e) {
        const { name, value }  = e.target;
        editState.proficiencies[name].proficiency.name = value;
        setEditState({...editState})
    }

    function handleProficiencyValue(e) {
        const { name, value }  = e.target;
        editState.proficiencies[name].value = value;
        setEditState({...editState})
    }

    function handleActions(e) {
        const { name, value }  = e.target;
        editState.actions[name] = value;
        setEditState({...editState})
    }

    return (
        <EditFunctions 
            handleSpeed={handleSpeed} 
            handleSenses={handleSenses} 
            handleConditionImmunities={handleConditionImmunities} 
            handleDamageImmunities={handleDamageImmunities}
            handleDamageResistances={handleDamageResistances}
            handleDamageVulberabilities={handleDamageVulberabilities}
            handleProficiencyName={handleProficiencyName}
            handleProficiencyValue={handleProficiencyValue}
            handleActions={handleActions}
        />
    )
}
import React, { useContext, useEffect, useState } from 'react';

import api from '../../services/api';

import { AuthContext } from '../Context/AuthContext';

export default function Home() {

    const [usuaruios, setUsuarios] = useState([]);

    //const { auth } = useContext(AuthContext);

    useEffect(() => {
        const token = localStorage.getItem("@token:totalZero");
        if (token) {
            api.get("/users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => setUsuarios(response.data));
        }
    }, []);

    return (
        <table>
            <thead>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Usuário</th>
                <th>Telefone</th>
            </thead>
            <tbody>
                {usuaruios.map(usuario => {
                    return (
                        <tr key={usuario._id}>
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.username}</td>
                            <td>{usuario.phone}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}
<?php include "templates/header.php"; ?>
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Organigrama</title>
		<link rel="stylesheet" href="css/materialize.min.css">
        <link rel="stylesheet" href="styles.css">
        <link rel="stylesheet" href="ventana-emergente.css">

    </head>
    <body>
        <div class="container">
            <div class="tree">
                <ul>
                    <li class="organigrama-item">
                        <div class="persona">
                            <img src="img/director.jpeg">
                            <div class="info">
                                <h2 class="titulo" data-descripcion="El director escolar es el líder administrativo de una escuela, responsable de supervisar todas las actividades y asegurar un ambiente de aprendizaje positivo y seguro.">Director</h2>
                                <p class="nombre">Prof. Juan Manuel longinos Calleja</p>
                            </div>
                            <ul class="suborganigrama">
                                <li class="organigrama-item">
                                    <div class="persona">
                                        <img src="img/sub.jpeg">
                                        <div class="info">
                                            <h2 class="titulo" data-descripcion="Descripción del Subdirector">Subdirectora</h2>
                                            <p class="nombre">Ma. Blanca Flor Soriano Rivera</p>
                                        </div>
                                        <ul class="suborganigrama">
                                            <li class="organigrama-item">
                                                <div class="persona">
                                                    <img src="img/lupita.jpeg" alt="Foto de la persona">
                                                    <div class="info">
                                                        <h2 class="titulo" data-descripcion="Descripción del Gerente">Orientadora</h2>
                                                        <p class="nombre">Ana Gabriela Morales Balderas</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="organigrama-item">
                                                <div class="persona">
                                                    <img src="img/2dos.jpeg" alt="Foto de la persona">
                                                    <div class="info">
                                                        <h2 class="titulo" data-descripcion="Descripción del Gerente">Orientadora</h2>
                                                        <p class="nombre">María Guadalupe Cabrera Chavira</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="organigrama-item">
                                                <div class="persona">
                                                    <img src="img/chavira.jpeg" alt="Foto de la persona">
                                                    <div class="info">
                                                        <h2 class="titulo" data-descripcion="Descripción del Gerente">Orientadora</h2>
                                                        <p class="nombre">Laura Chavita Tapia</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="organigrama-item">
                                    <div class="persona">
                                        <img src="img/secretario.jpeg" alt="Foto de la persona">
                                        <div class="info">
                                            <h2 class="titulo" data-descripcion="Descripción del Secretario Escolar">Secretario Escolar</h2>
                                            <p class="nombre">Prof. Alejandro Ernesto García Velazco</p>
                                        </div>
                                        <ul class="suborganigrama">
                                            <li class="organigrama-item">
                                                <div class="persona">
                                                    <div class="info">
                                                        <h2 class="titulo" data-descripcion="Descripción del Personal de Mantenimiento">Personal de Mantenimiento</h2>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="organigrama-item">
                                                <div class="persona">
                                                    <img src="img/jessi.jpeg" alt="Foto de la persona">
                                                    <div class="info">
                                                        <h2 class="titulo" data-descripcion="Descripción del Personal Administrativo">Personal Administrativo</h2>
                                                        <p class="nombre">Jessica Amairani Laguna Soriano</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="organigrama-item">
                                                <div class="persona">
                                                    <img src="img/rosii.jpeg" alt="Foto de la persona">
                                                    <div class="info">
                                                        <h2 class="titulo" data-descripcion="Descripción del Personal Administrativo">Personal Administrativo</h2>
                                                        <p class="nombre">Rossi Marisol Rivero Pérez</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="organigrama-item">
                                    <div class="persona">
                                        <img src="img/vinculacion.jpeg" alt="Foto de la persona">
                                        <div class="info">
                                            <h2 class="titulo" data-descripcion="Descripción de la Vinculación">Vinculación</h2>
                                            <p class="nombre">Ma. María Antonieta de las nieves moreno González</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="ventana-emergente" id="ventana-emergente">
            <img src="" id="imagen-persona">
            <p id="descripcion-persona">Descripción</p>
        </div>

        <script src="script.js"></script>
    </body>
    </html>

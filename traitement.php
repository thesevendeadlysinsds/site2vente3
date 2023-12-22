<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les valeurs des champs du formulaire
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $motdepasse = $_POST['motdepasse'];

    // Valider les données (vous pouvez ajouter vos propres règles de validation ici)

    // Par exemple, vérifier si les champs ne sont pas vides
    if (empty($nom) || empty($email) || empty($motdepasse)) {
        // Rediriger vers une page d'erreur ou afficher un message d'erreur
        echo "Veuillez remplir tous les champs du formulaire.";
        exit;
    }

    // Traiter les données (par exemple, enregistrer les informations dans une base de données)

    // Ici, nous affichons simplement les données soumises
    echo "Nom : " . $nom . "<br>";
    echo "Email : " . $email . "<br>";
    echo "Mot de passe : " . $motdepasse . "<br>";

    // Vous pouvez ajouter votre propre logique de traitement ici

    // Rediriger vers une page de succès ou afficher un message de succès
    echo "Inscription réussie !";
} else {
    // Le formulaire n'a pas été soumis, rediriger vers une page d'erreur ou afficher un message d'erreur
    echo "Une erreur s'est produite lors de la soumission du formulaire.";
    exit;
}

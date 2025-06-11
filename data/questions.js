export const questionBank = [
            {
                id: 1,
                question: "Dans quelle situation un technicien utilise-t-il la commande de commutateur show interfaces ?",
                options: [
                    "Pour déterminer l'adresse MAC d'un périphérique réseau directement connecté sur une interface donnée",
                    "Lorsque des paquets sont reçus d'un hôte donné qui est directement connecté",
                    "Lorsqu'un terminal peut atteindre les périphériques locaux, et non les périphériques distants",
                    "Pour déterminer si l'accès à distance est activé"
                ],
                correct: 1,
                explanation: "La commande 'show interfaces' est utilisée pour afficher des informations détaillées sur les interfaces du commutateur, y compris leur état, les statistiques de trafic, et les erreurs. Elle est particulièrement utile lorsque des paquets sont reçus d'un hôte directement connecté, car elle permet de vérifier si l'interface fonctionne correctement et si elle reçoit et transmet des paquets."
            },
            {
                id: 2,
                question: "Faites correspondre le numéro d'étape à la séquence des étapes qui se produisent pendant le processus de basculement HSRP.",
                options: {
                    a: "Étape 1: Le routeur de transfert échoue.",
                    b: "Étape 2: Le routeur en veille cesse de voir les messages Hello du routeur de transfert.",
                    c: "Étape 3: Le routeur de secours assume le rôle du routeur de transfert en utilisant à la fois les adresses IP et MAC du routeur virtuel."
                },
                correct: "a,b,c",
                explanation: "Le processus de basculement HSRP se déroule dans l'ordre suivant: 1) Le routeur actif (de transfert) tombe en panne, 2) Le routeur en veille détecte l'absence de messages Hello du routeur actif après un certain délai, et 3) Le routeur en veille assume le rôle du routeur actif en prenant possession des adresses IP et MAC virtuelles, permettant ainsi une transition transparente pour les hôtes du réseau."
            },
            {
                id: 3,
                question: "Reportez-vous à l'illustration. Un administrateur tente de configurer une route statique IPv6 sur le routeur R1 pour atteindre le réseau connecté au routeur R2. Après la saisie de la commande de la route statique, la connectivité au réseau est toujours défaillante. Quelle erreur a été effectuée dans la configuration de la route statique ?",
                image: "img/img1.jpg",
                options: {
                    a: "L'adresse du tronçon suivant est incorrecte.",
                    b: "Le réseau de destination est incorrect.",
                    c: "L'interface est incorrecte.",
                    d: "Le préfixe réseau est incorrect."
                },
                correct: "c",
                explanation: "Dans cet exemple, l'interface spécifiée dans la route statique est incorrecte. L'interface doit être l'interface de sortie sur R1 qui est connectée à R2, généralement s0/0/0. Si l'interface spécifiée est incorrecte, les paquets seront envoyés par la mauvaise interface ou la route ne sera pas installée dans la table de routage si l'interface n'existe pas."
            },
            {
                id: 4,
                question: "Un nouveau commutateur de couche 3 est connecté à un routeur et est en cours de configuration pour le routage InterVLAN. Quelles sont les trois étapes requises pour la configuration?",
                options: {
                    a: "Attribution des ports au VLAN natif",
                    b: "la mise en œuvre des protocoles de routage",
                    c: "Attribution de ports aux VLAN",
                    d: "Activation du routage IP",
                    e: "Création d'interfaces SVI",
                    f: "Installation d'une route statique",
                    g: "Modification du VLAN par défaut"
                },
                correct: "c,d,e",
                explanation: "Pour configurer le routage InterVLAN sur un commutateur de couche 3, trois étapes principales sont nécessaires: 1) Attribuer les ports aux VLAN appropriés pour segmenter le réseau, 2) Activer le routage IP sur le commutateur avec la commande 'ip routing', et 3) Créer des interfaces SVI (Switched Virtual Interface) pour chaque VLAN qui doit être routé, avec des adresses IP dans les sous-réseaux correspondants."
            },
            {
                id: 5,
                question: "Reportez-vous à l'illustration. En fonction de la configuration et de la sortie présentées, pourquoi manque-t-il le VLAN 99 ?",
                image: "img/img2.jpg",
                options: {
                    a: "Parce qu'il y a un problème de câblage sur le VLAN 99",
                    b: "Parce que le VLAN 1 est activé et qu'il ne peut y avoir qu'un VLAN de gestion sur le commutateur",
                    c: "Parce que le VLAN 99 n'est pas un VLAN de gestion valide",
                    d: "Parce que le VLAN 99 n'a pas encore été créé"
                },
                correct: "d",
                explanation: "Si le VLAN 99 n'apparaît pas dans la sortie de la commande 'show vlan brief', c'est probablement parce qu'il n'a pas encore été créé sur le commutateur. Les VLAN doivent être explicitement créés avant de pouvoir être utilisés, à l'exception des VLAN par défaut comme le VLAN 1. Pour créer le VLAN 99, il faudrait utiliser la commande 'vlan 99' en mode de configuration globale."
            },
            {
                id: 6,
                question: "Quelles paires de modes d'agrégation établissent une liaison agrégée fonctionnelle entre deux commutateurs Cisco ?",
                options: {
                    a: "dynamic auto – dynamic auto",
                    b: "dynamic desirable – dynamic desirable",
                    c: "dynamic desirable – trunk",
                    d: "dynamic desirable – dynamic auto",
                    e: "access – dynamic auto",
                    f: "access – trunk"
                },
                correct: "b,c,d",
                explanation: "Trois combinaisons de modes d'agrégation établissent une liaison trunk fonctionnelle: 1) dynamic desirable - dynamic desirable: les deux côtés tentent activement de former un trunk, 2) dynamic desirable - trunk: un côté est configuré en mode trunk statique et l'autre tente activement de former un trunk, et 3) dynamic desirable - dynamic auto: un côté tente activement de former un trunk et l'autre répond favorablement à cette tentative."
            },
            {
                id: 7,
                question: "Quel protocole ou technologie nécessite que les commutateurs soient en mode serveur ou client?",
                options: {
                    a: "Protocole VTP",
                    b: "HSRP",
                    c: "EtherChannel",
                    d: "DTP"
                },
                correct: "a",
                explanation: "Le protocole VTP (VLAN Trunking Protocol) nécessite que les commutateurs soient configurés en mode serveur ou client pour participer à la propagation des informations VLAN. Les serveurs VTP peuvent créer, modifier et supprimer des VLAN, tandis que les clients VTP reçoivent et appliquent les mises à jour VLAN mais ne peuvent pas les modifier. Il existe également un mode transparent qui ne participe pas activement au domaine VTP."
            },
            {
                id: 8,
                question: "Examinez l'illustration. Après avoir essayé de saisir la configuration affichée dans le routeur RTA, un administrateur reçoit une erreur et les utilisateurs du VLAN 20 signalent qu'ils ne peuvent pas communiquer avec les utilisateurs du VLAN 30. Quelle est l'origine du problème ?",
                image: "img/img3.jpg",
                options: {
                    a: "La commande no shutdown aurait dû être exécutée sur Fa0/0.20 et Fa0/0.30.",
                    b: "RTA utilise le même sous-réseau pour le VLAN 20 et le VLAN 30.",
                    c: "Fa0/0 ne contient aucune adresse à utiliser comme passerelle par défaut.",
                    d: "Dot1q ne prend pas en charge les sous-interfaces."
                },
                correct: "b",
                explanation: "Le problème est que le routeur RTA utilise le même sous-réseau (probablement 192.168.1.0/24) pour les deux VLAN 20 et VLAN 30. Pour que le routage inter-VLAN fonctionne correctement, chaque VLAN doit être dans un sous-réseau IP distinct. Si les deux VLAN utilisent le même sous-réseau, le routeur ne saura pas comment acheminer correctement le trafic entre eux."
            },
            {
                id: 9,
                question: "Quels sont les deux modes VTP qui permettent la création, la modification et la suppression des VLAN sur le commutateur local ?",
                options: {
                    a: "client",
                    b: "distribution",
                    c: "principal",
                    d: "serveur",
                    e: "esclave",
                    f: "transparent"
                },
                correct: "d,f",
                explanation: "Dans le protocole VTP (VLAN Trunking Protocol), deux modes permettent la création, la modification et la suppression des VLAN sur le commutateur local: 1) Le mode serveur, qui peut créer, modifier et supprimer des VLAN, et propage ces changements aux autres commutateurs du domaine VTP, et 2) Le mode transparent, qui permet également de créer, modifier et supprimer des VLAN localement, mais ne participe pas activement au domaine VTP et ne propage pas ces changements."
            },
            {
                id: 10,
                question: "Reportez-vous à l'illustration. Un administrateur réseau configure R1 pour le routage inter-VLAN entre VLAN 10 et VLAN 20. Toutefois, les périphériques du VLAN 10 et du VLAN 20 ne peuvent pas communiquer. Selon la configuration de l'exposition, quelle est la cause possible du problème?",
                image: "img/img4.jpg",
                options: {
                    a: "L'encapsulation est mal configurée sur une sous-interface.",
                    b: "Une commande no shutdown doit être ajoutée dans chaque configuration de sous-interface.",
                    c: "La commande interface gigabitEthernet 0/0.1 est faux.",
                    d: "Le port Gi0/0 doit être configuré comme port de jonction."
                },
                correct: "c",
                explanation: "Le problème est que la commande 'interface gigabitEthernet 0/0.1' est incorrecte pour le routage inter-VLAN. Les numéros de sous-interface doivent correspondre aux numéros de VLAN qu'ils desservent pour plus de clarté et de cohérence. Dans ce cas, il devrait y avoir des sous-interfaces comme gigabitEthernet 0/0.10 et gigabitEthernet 0/0.20 pour correspondre aux VLAN 10 et VLAN 20 respectivement."
            },
            {
                id: 11,
                question: "Un administrateur réseau est en train de configurer un WLAN. Pourquoi l'administrateur utiliserait-il un contrôleur WLAN?",
                options: {
                    a: "pour centraliser la gestion de plusieurs réseaux WLAN",
                    b: "fournir un service prioritaire pour les applications sensibles au temps",
                    c: "pour réduire le risque d'ajout de points d'accès non autorisés au réseau",
                    d: "pour faciliter la configuration de groupe et la gestion de plusieurs WLAN via un WLC"
                },
                correct: "d",
                explanation: "Un contrôleur WLAN (WLC) est utilisé principalement pour faciliter la configuration de groupe et la gestion centralisée de plusieurs points d'accès sans fil. Il permet à l'administrateur de configurer des politiques communes, de gérer les paramètres de sécurité et de surveiller l'ensemble du réseau sans fil à partir d'une interface unique, ce qui simplifie considérablement la gestion des réseaux WLAN de taille moyenne à grande."
            },
            {
                id: 12,
                question: "Associez la description au type de VLAN correct.",
                options: {
                    a: "VLAN par défaut: tous les ports de commutateur sont attribués à ce VLAN après le démarrage initial du commutateur",
                    b: "réseaux locaux virtuels (VLAN) de données: configuration destinée à acheminer le trafic généré par l'utilisateur",
                    c: "réseau local virtuel (VLAN) natif: acheminement du trafic non étiqueté",
                    d: "réseau local virtuel de gestion: une adresse IP et un masque de sous-réseau sont attribués à ce VLAN, ce qui permet l'accès au commutateur via HTTP, Telnet, SSH ou SNMP"
                },
                correct: "a,b,c,d",
                explanation: "Les différents types de VLAN ont des fonctions spécifiques: 1) Le VLAN par défaut (généralement VLAN 1) est celui auquel tous les ports sont initialement assignés, 2) Les VLAN de données transportent le trafic généré par les utilisateurs, 3) Le VLAN natif est utilisé pour le trafic non étiqueté sur un lien trunk, et 4) Le VLAN de gestion est configuré avec une adresse IP pour permettre l'administration à distance du commutateur."
            },
            {
                id: 13,
                question: "Examinez l'illustration. Comment une trame envoyée depuis PCA est-elle transmise à PCC si la table d'adresses MAC du commutateur SW1 est vide ?",
                options: {
                    a: "SW1 abandonne la trame car il ne connaît pas l'adresse MAC de destination.",
                    b: "SW1 diffuse la trame sur tous les ports de SW1, à l'exception du port d'entrée de la trame dans le commutateur.",
                    c: "SW1 diffuse la trame sur tous les ports du commutateur, à l'exception du port interconnecté au commutateur SW2 et du port d'entrée de la trame dans le commutateur.",
                    d: "SW1 transmet la trame directement à SW2. SW2 diffuse la trame sur tous les ports connectés à SW2, à l'exception du port d'entrée de la trame dans le commutateur."
                },
                correct: "b",
                explanation: "Lorsqu'un commutateur reçoit une trame dont l'adresse MAC de destination n'est pas dans sa table d'adresses MAC (ou si la table est vide), il inonde la trame sur tous ses ports actifs, à l'exception du port d'entrée. Ce comportement, appelé 'flooding', permet à la trame d'atteindre sa destination même si le commutateur ne connaît pas encore son emplacement."
            },
            {
                id: 14,
                question: "Associez l'état de la liaison au statut d'interface et de protocole.",
                options: {
                    a: "operational: up/up",
                    b: "problème de couche 1: down/down",
                    c: "problème de couche 2: up/down",
                    d: "désactivé: Désactivé par un administrateur"
                },
                correct: "a,b,c,d",
                explanation: "Les différents états d'interface correspondent à des statuts spécifiques: 1) up/up signifie que l'interface est opérationnelle aux niveaux physique et de protocole, 2) down/down indique un problème de couche 1 (physique) comme un câble débranché, 3) up/down suggère un problème de couche 2 comme une incompatibilité de protocole, et 4) administratively down indique que l'interface a été désactivée manuellement par un administrateur."
            },
            {
                id: 15,
                question: "Quel est le moyen d'avoir une configuration sécurisée pour l'accès à distance à un appareil sur le réseau ?",
                options: {
                    a: "Configurer SSH.",
                    b: "Configurer Telnet.",
                    c: "Configurer une ACL et l'appliquer aux lignes VTY.",
                    d: "Configurez 802.1x."
                },
                correct: "a",
                explanation: "SSH (Secure Shell) est le moyen le plus sécurisé pour l'accès à distance à un appareil réseau car il chiffre toutes les communications, y compris les identifiants de connexion. Contrairement à Telnet qui transmet les données en texte clair, SSH protège contre l'interception des informations sensibles. Bien que les ACL puissent limiter qui peut se connecter, elles ne sécurisent pas la communication elle-même."
            },
            {
                id: 16,
                question: "Examinez l'illustration. L'hôte A a envoyé un paquet à l'hôte B. Quelles sont les adresses IP et MAC source sur le paquet lorsqu'il atteint l'hôte B ?",
                options: {
                    a: "MAC source : 00E0.FE10.17A3, IP source : 192.168.1.1",
                    b: "MAC source : 00E0.FE10.17A3, IP source : 10.1.1.10",
                    c: "MAC source : 00E0.FE91.7799, IP source : 192.168.1.1",
                    d: "MAC source : 00E0.FE91.7799, IP source : 10.1.1.10",
                    e: "MAC source : 00E0.FE91.7799, IP source : 10.1.1.1"
                },
                correct: "d",
                explanation: "Lorsqu'un paquet traverse un routeur, l'adresse MAC source est remplacée par celle de l'interface de sortie du routeur (ici 00E0.FE91.7799), mais l'adresse IP source reste celle de l'expéditeur original (10.1.1.10). C'est parce que le routage se fait au niveau de la couche 3 (IP), tandis que les adresses MAC sont utilisées uniquement pour la communication de couche 2 sur chaque segment de réseau."
            },
            {
                id: 17,
                question: "Reportez-vous à l'illustration. Quels sont les rôles possibles pour les ports A, B, C et D dans ce réseau RSTP ?",
                options: {
                    a: "Désigné, racine, alternatif, racine",
                    b: "Désigné, alternatif, racine, racine",
                    c: "Alternatif, désigné, racine, racine",
                    d: "Alternatif, racine, désigné, racine"
                },
                correct: "c",
                explanation: "Dans un réseau RSTP, les rôles de port sont attribués en fonction de la topologie et du calcul du Spanning Tree. Le port A est probablement un port alternatif (bloqué mais prêt à prendre le relais), le port B est un port désigné (transmet le trafic vers un segment), et les ports C et D sont des ports racine (meilleur chemin vers le pont racine) sur leurs commutateurs respectifs."
            },
            {
                id: 18,
                question: "Plusieurs actions peuvent pallier une attaque de VLAN. Citez-en trois.",
                options: {
                    a: "Activer la fonction de protection BPDU.",
                    b: "Utiliser des VLAN privés.",
                    c: "Activer manuellement le trunking.",
                    d: "Faire d'un VLAN inutilisé le VLAN natif.",
                    e: "Désactiver le protocole DTP.",
                    f: "Activer la fonction de protection de source."
                },
                correct: "c,d,e",
                explanation: "Pour prévenir les attaques de VLAN hopping, trois mesures efficaces sont: 1) Activer manuellement le trunking uniquement sur les ports nécessaires et désactiver la négociation automatique, 2) Utiliser un VLAN inutilisé comme VLAN natif pour éviter les attaques de double encapsulation, et 3) Désactiver le protocole DTP (Dynamic Trunking Protocol) qui pourrait être exploité pour établir des liaisons trunk non autorisées."
            },
            {
                id: 19,
                question: "Quelle méthode de chiffrement sans fil offre la meilleure sécurité ?",
                options: {
                    a: "WPA2 avec AES",
                    b: "WPA2 avec TKIP",
                    c: "WEP",
                    d: "WPA"
                },
                correct: "a",
                explanation: "WPA2 avec AES (Advanced Encryption Standard) offre la meilleure sécurité parmi les options listées. AES est un algorithme de chiffrement robuste qui n'a pas de vulnérabilités connues significatives, contrairement à TKIP ou WEP. WPA2 a remplacé WPA et offre une sécurité renforcée, tandis que WEP est considéré comme obsolète et facilement piratable."
            },
            {
                id: 20,
                question: "Après qu'un hôte a généré une adresse IPv6 à l'aide du processus DHCPv6 ou SLAAC, comment l'hôte vérifie-t-il que l'adresse est unique et donc utilisable?",
                options: {
                    a: "L'hôte envoie un message de demande d'écho ICMPv6 à l'adresse DHCPv6 ou SLAAC apprise et si aucune réponse n'est renvoyée, l'adresse est considérée comme unique.",
                    b: "L'hôte vérifie le cache du voisin local pour l'adresse apprise et si l'adresse n'est pas mise en cache, il est considéré comme unique.",
                    c: "L'hôte envoie une diffusion ARP vers le lien local et si aucun hôte n'envoie de réponse, l'adresse est considérée comme unique.",
                    d: "L'hôte envoie un message de sollicitation de voisin ICMPv6 à l'adresse DHCP ou SLAAC apprise et si aucune annonce de voisin n'est renvoyée, l'adresse est considérée comme unique."
                },
                correct: "d",
                explanation: "En IPv6, la vérification de l'unicité d'une adresse se fait par le processus de Détection d'Adresse Dupliquée (DAD). L'hôte envoie un message de Sollicitation de Voisin (Neighbor Solicitation) ICMPv6 avec l'adresse qu'il souhaite utiliser comme cible. Si aucun autre hôte ne répond avec une Annonce de Voisin (Neighbor Advertisement), l'adresse est considérée comme unique et peut être utilisée."
            },
            {
                id: 21,
                question: "Un administrateur tente de supprimer des configurations d'un commutateur. Après avoir exécuté la commande erase startup-config et rechargé le commutateur, l'administrateur constate que les VLAN 10 et 100 existent toujours dans le commutateur. Pourquoi ces VLAN n'ont-ils pas été supprimés ?",
                options: {
                    a: "Ces VLAN étant enregistrés dans un fichier appelé vlan.dat qui se trouve dans la mémoire Flash, ce fichier doit être supprimé manuellement.",
                    b: "Ces VLAN ne peuvent pas être supprimés, sauf si le commutateur est en mode client VTP.",
                    c: "Ces VLAN peuvent être uniquement supprimés du commutateur au moyen des commandes no vlan 10 et no vlan 100.",
                    d: "Ces VLAN sont des VLAN par défaut et ne peuvent pas être supprimés."
                },
                correct: "a",
                explanation: "Les VLAN sont stockés dans le fichier vlan.dat dans la mémoire Flash du commutateur. La commande erase startup-config ne supprime que la configuration de démarrage, mais pas le fichier vlan.dat. Pour supprimer les VLAN, vous devez supprimer manuellement ce fichier ou utiliser la commande delete flash:vlan.dat."
            },
            {
                id: 22,
                question: "Examinez l'illustration. Un administrateur réseau configure le routage inter-VLAN sur un réseau. Pour l'instant, un seul VLAN est utilisé, mais d'autres seront ajoutés prochainement. Quel est le rôle du paramètre manquant, indiqué par un point d'interrogation mis en surbrillance dans l'illustration ?",
                options: {
                    a: "Il identifie le numéro du VLAN.",
                    b: "Il identifie la sous-interface.",
                    c: "Il identifie le numéro du VLAN natif.",
                    d: "Il identifie le type d'encapsulation utilisé.",
                    e: "Il identifie le nombre d'hôtes autorisés sur l'interface."
                },
                correct: "a",
                explanation: "Dans la configuration du routage inter-VLAN avec des sous-interfaces, le paramètre après \"encapsulation dot1q\" est le numéro du VLAN. Ce numéro identifie à quel VLAN la sous-interface est associée."
            },
            {
                id: 3,
                question: "Après avoir attaché quatre PC aux ports du commutateur, configuré le SSID et défini les propriétés d'authentification pour un petit réseau de bureau, un technicien teste avec succès la connectivité de tous les PC connectés au commutateur et au WLAN. Un pare-feu est ensuite configuré sur le périphérique avant de le connecter à Internet. Quel type de périphérique réseau inclut toutes les fonctionnalités décrites?",
                options: {
                    a: "commutateur",
                    b: "pare-feu",
                    c: "point d'accès sans fil autonome",
                    d: "routeur sans fil"
                },
                correct: "d",
                explanation: "Un routeur sans fil combine les fonctionnalités d'un commutateur (pour connecter des PC), d'un point d'accès sans fil (pour configurer le SSID et l'authentification) et d'un pare-feu (pour la sécurité avant la connexion à Internet). C'est le seul périphérique parmi les options qui intègre toutes ces fonctionnalités."
            },
            {
                id: 4,
                question: "Associez les types de message DHCP à l'ordre du processus DHCPv4.",
                options: {
                    a: "Étape 1: DHCPDISCOVER",
                    b: "Étape 2: DHCPOFFER",
                    c: "Étape 3: DHCPREQUEST",
                    d: "Étape 4: DHCPACK"
                },
                correct: "a,b,c,d",
                explanation: "Le processus DHCPv4 suit ces étapes dans l'ordre: DHCPDISCOVER (client cherche un serveur), DHCPOFFER (serveur propose une adresse), DHCPREQUEST (client demande l'adresse), DHCPACK (serveur confirme l'attribution)."
            },
            {
                id: 5,
                question: "Examinez l'illustration. En plus des routes statiques qui dirigent le trafic vers les réseaux 10.10.0.0/16 et 10.20.0.0/16, le routeur HQ est configuré avec la commande suivante : ip route 0.0.0.0 0.0.0.0 serial 0/1/1. Quel est l'objectif de cette commande ?",
                options: {
                    a: "Les paquets dont le réseau de destination n'est ni 10.10.0.0/16 ni 10.20.0.0/16, ou dont le réseau de destination n'est pas connecté directement seront transférés à Internet.",
                    b: "Les paquets reçus depuis Internet seront transférés à l'un des LAN connectés à R1 ou à R2.",
                    c: "Les paquets destinés aux réseaux qui ne figurent pas dans la table de routage de HQ seront abandonnés.",
                    d: "Les paquets provenant du réseau 10.10.0.0/16 seront transférés au réseau 10.20.0.0/16, et les paquets provenant du réseau 10.20.0.0/16 seront transférés au réseau 10.10.0.0/16."
                },
                correct: "a",
                explanation: "La commande 'ip route 0.0.0.0 0.0.0.0 serial 0/1/1' configure une route par défaut. Cette route est utilisée lorsqu'aucune autre route dans la table de routage ne correspond à l'adresse de destination d'un paquet. Dans ce cas, tous les paquets destinés à des réseaux qui ne sont ni 10.10.0.0/16, ni 10.20.0.0/16, ni directement connectés, seront envoyés vers l'interface serial 0/1/1, qui est probablement connectée à Internet."
            },
            {
                id: 6,
                question: "Examinez l'illustration. Quelle adresse MAC de destination est utilisée lorsque des trames sont envoyées depuis la station de travail vers la passerelle par défaut ?",
                options: {
                    a: "Les adresses MAC du routeur de transfert et du routeur en veille.",
                    b: "L'adresse MAC du routeur de transfert",
                    c: "L'adresse MAC du routeur en veille",
                    d: "L'adresse MAC du routeur virtuel"
                },
                correct: "d",
                explanation: "Dans un environnement HSRP (Hot Standby Router Protocol), les stations de travail sont configurées avec l'adresse IP virtuelle comme passerelle par défaut. Lorsqu'elles envoient des trames à la passerelle par défaut, elles utilisent l'adresse MAC virtuelle associée à cette adresse IP virtuelle, et non les adresses MAC physiques des routeurs réels."
            },
            {
                id: 7,
                question: "Reportez-vous à l'illustration. Un administrateur réseau a relié deux commutateurs via la technologie EtherChannel. Si le protocole STP fonctionne, quel sera le résultat final ?",
                options: {
                    a: "Les commutateurs équilibreront la charge et utiliseront les deux EtherChannels pour transférer les paquets.",
                    b: "La boucle générée créera une tempête de diffusion.",
                    c: "STP bloquera une des liaisons redondantes.",
                    d: "Les deux canaux de port seront fermés."
                },
                correct: "c",
                explanation: "Même avec EtherChannel, STP (Spanning Tree Protocol) continue de fonctionner pour éviter les boucles dans le réseau. Si deux commutateurs sont reliés par deux EtherChannels distincts, STP bloquera l'un des deux chemins redondants pour éviter une boucle de commutation, tout en laissant l'autre actif."
            },
            {
                id: 8,
                question: "Reportez-vous à l'illustration. Quelle route statique un technicien informatique doit-il saisir pour créer une route de secours vers le réseau 172.16.1.0 qui sera utilisée uniquement en cas de défaillance de la route principale associée à RIP ?",
                options: {
                    a: "ip route 172.16.1.0 255.255.255.0 s0/0/0 121",
                    b: "ip route 172.16.1.0 255.255.255.0 s0/0/0 111",
                    c: "ip route 172.16.1.0 255.255.255.0 s0/0/0 91",
                    d: "ip route 172.16.1.0 255.255.255.0 s0/0/0"
                },
                correct: "a",
                explanation: "Pour créer une route de secours, il faut configurer une route statique avec une distance administrative supérieure à celle du protocole de routage principal. RIP a une distance administrative de 120, donc une route statique avec une distance administrative de 121 (comme dans l'option A) sera utilisée uniquement si la route RIP devient indisponible."
            },
            {
                id: 9,
                question: "Quel est l'effet de l'entrée de la commande de configuration shutdown sur un commutateur?",
                options: {
                    a: "Il active portfast sur une interface de commutateur spécifique.",
                    b: "Il désactive un port inutilisé.",
                    c: "Il désactive le DTP sur une interface non-trunking.",
                    d: "Il active la garde BPDU sur un port spécifique."
                },
                correct: "b",
                explanation: "La commande shutdown, lorsqu'elle est utilisée dans le contexte d'une interface de commutateur, désactive cette interface. C'est une bonne pratique de sécurité de désactiver les ports inutilisés pour éviter les connexions non autorisées."
            },
            {
                id: 10,
                question: "Quelles sont les trois normes Wi-Fi fonctionnant dans la plage de fréquences 2,4 GHz ?",
                options: {
                    a: "802.11b",
                    b: "802.11a",
                    c: "802.11ac",
                    d: "802.11n",
                    e: "802.11g"
                },
                correct: "a,d,e",
                explanation: "Les normes Wi-Fi qui fonctionnent dans la bande de fréquences 2,4 GHz sont 802.11b, 802.11g et 802.11n. La norme 802.11a fonctionne exclusivement dans la bande 5 GHz, tandis que 802.11ac fonctionne uniquement dans la bande 5 GHz. 802.11n est une norme double bande qui peut fonctionner à la fois en 2,4 GHz et 5 GHz."
            },
            {
                id: 11,
                question: "Un technicien réseau dépanne un réseau sans fil venant d'être déployé et utilisant les normes 802.11 les plus récentes. Lorsque les utilisateurs accèdent à des services gourmands en bande passante tels que la vidéo sur Internet, les performances du réseau sans fil sont médiocres. Pour améliorer les performances, le technicien réseau décide de configurer un SSID avec une bande de fréquences de 5 GHz et de former les utilisateurs à employer ce SSID pour les services multimédias de transmission en continu. En quoi cette solution permet-elle d'améliorer les performances du réseau sans fil pour ce type de service ?",
                options: {
                    a: "La bande 5 GHz offre une plage plus étendue et est donc susceptible de ne pas comporter d'interférences.",
                    b: "La bande 5 GHz offre davantage de canaux et est moins encombrée que la bande 2,4 GHz. Elle convient donc mieux à la transmission multimédia en continu.",
                    c: "Obliger les utilisateurs à passer à la bande 5 GHz pour la transmission multimédia en continu est peu pratique et limite le nombre d'utilisateurs accédant à ces services.",
                    d: "Les seuls utilisateurs pouvant basculer vers la bande 5 GHz sont ceux disposant des cartes réseau les plus récentes, ce qui permet de limiter l'utilisation."
                },
                correct: "b",
                explanation: "La bande de fréquences 5 GHz offre davantage de canaux non chevauchants (jusqu'à 24 canaux contre seulement 3 pour la bande 2,4 GHz) et est généralement moins encombrée que la bande 2,4 GHz. Bien que la bande 5 GHz ait une portée plus courte et une pénétration des murs plus faible, elle offre des débits plus élevés et moins d'interférences, ce qui la rend idéale pour les services gourmands en bande passante comme la vidéo en streaming."
            },
            {
                id: 12,
                question: "Sélectionnez les trois modes d'établissement de canaux PAgP.",
                options: {
                    a: "actif",
                    b: "étendu",
                    c: "Activé",
                    d: "desirable",
                    e: "automatique",
                    f: "passif"
                },
                correct: "c,d,e",
                explanation: "Les trois modes d'établissement de canaux PAgP (Port Aggregation Protocol) sont: Activé (on), desirable et automatique. Le mode 'on' force le port à canaliser sans négociation. Le mode 'desirable' place le port dans un état actif de négociation. Le mode 'automatique' place le port dans un état passif de négociation."
            },
            {
                id: 13,
                question: "Reportez-vous à l'illustration. L'administrateur réseau est en train de configurer la fonction de sécurité du port sur le commutateur SWC. L'administrateur a émis la commande show port-security interface fa 0/2 pour vérifier la configuration. Que peut-on conclure de la sortie qui est montrée?",
                image: "img/img5.jpg",
                options: {
                    a: "Le port est configuré en tant que liaison de trunk.",
                    b: "Les violations de sécurité entraîneront l'arrêt immédiat de ce port.",
                    c: "Ce port est actuellement en service.",
                    d: "Le mode de port de commutation pour cette interface est le mode d'accès.",
                    e: "Trois violations de sécurité ont été détectées sur cette interface.",
                    f: "Aucun périphérique n'est actuellement connecté à ce port."
                },
                correct: "b,c,d",
                explanation: "D'après la sortie de la commande, on peut conclure que: les violations de sécurité entraîneront l'arrêt immédiat du port (mode de violation 'shutdown'), le port est actuellement en service (status 'up'), et le mode de port de commutation est le mode d'accès (non configuré comme trunk)."
            },
            {
                id: 14,
                question: "Quel protocole doit être désactivé pour pallier les attaques de VLAN ?",
                options: {
                    a: "CDP",
                    b: "STP",
                    c: "DTP",
                    d: "ARP"
                },
                correct: "c",
                explanation: "Le protocole DTP (Dynamic Trunking Protocol) doit être désactivé pour pallier les attaques de VLAN. DTP permet la négociation automatique des liaisons trunk entre commutateurs. Un attaquant pourrait exploiter DTP pour créer une liaison trunk non autorisée et accéder à tous les VLAN, ce qui est connu sous le nom d'attaque de saut de VLAN."
            },
            {
                id: 15,
                question: "Quelle technique d'atténuation empêcherait les serveurs malveillants de fournir de faux paramètres de configuration IP aux clients ?",
                options: {
                    a: "mise en œuvre des solutions de sécurisation des ports",
                    b: "mise en œuvre de la sécurité des ports sur les ports périphériques",
                    c: "désactivation des ports CDP sur les ports périphériques",
                    d: "activation de l'espionnage DHCP"
                },
                correct: "d",
                explanation: "L'espionnage DHCP (DHCP snooping) est une technique de sécurité qui filtre les messages DHCP non fiables et empêche les serveurs DHCP non autorisés de fournir des informations de configuration IP aux clients. Cette fonctionnalité permet de créer une base de données des adresses IP attribuées légitimement et de bloquer les tentatives d'usurpation DHCP."
            },
            {
                id: 16,
                question: "Quelle méthode d'attribution de préfixe IPv6 repose sur le préfixe contenu dans les messages RA?",
                options: {
                    a: "statique",
                    b: "DHCPv6 dynamique",
                    c: "SLAAC",
                    d: "EUI-64"
                },
                correct: "c",
                explanation: "SLAAC (Stateless Address Autoconfiguration) est une méthode d'attribution d'adresse IPv6 qui repose sur les messages RA (Router Advertisement). Avec SLAAC, les hôtes peuvent générer automatiquement leurs propres adresses IPv6 en combinant le préfixe réseau annoncé dans les messages RA avec leur identifiant d'interface."
            },
            {
                id: 17,
                question: "Un analyste de la cybersécurité utilise l'outil macof pour évaluer la configuration des commutateurs déployés dans le réseau de base d'une organisation. Quel type d'attaque LAN l'analyste cible-t-il au cours de cette évaluation?",
                options: {
                    a: "Usurpation DHCP (ou spoofing)",
                    b: "Sauts VLAN",
                    c: "Débordement de la table d'adresses IP",
                    d: "Double marquage VLAN"
                },
                correct: "c",
                explanation: "L'outil macof est utilisé pour générer un grand nombre de trames avec des adresses MAC source aléatoires, ce qui peut provoquer un débordement de la table d'adresses MAC (CAM) du commutateur. Lorsque la table CAM est pleine, le commutateur peut commencer à fonctionner comme un hub, transmettant les trames à tous les ports, ce qui permet à un attaquant de capturer le trafic destiné à d'autres hôtes."
            },
            {
                id: 18,
                question: "Au cours du processus AAA, quand l'autorisation est-elle implémentée ?",
                options: {
                    a: "dès que la fonction de traçabilité et d'audit AAA a reçu des rapports détaillés",
                    b: "immédiatement après une authentification réussie auprès d'une source de données AAA",
                    c: "aussitôt qu'un client AAA a envoyé des informations d'authentification à un serveur centralisé",
                    d: "dès que les ressources accessibles à un utilisateur ont été déterminées"
                },
                correct: "b",
                explanation: "Dans le processus AAA (Authentication, Authorization, Accounting), l'autorisation est implémentée immédiatement après une authentification réussie. Une fois que l'utilisateur a prouvé son identité (authentification), le système détermine quelles ressources et services cet utilisateur est autorisé à utiliser (autorisation)."
            },
            {
                id: 19,
                question: "Examinez l'illustration. Un ingénieur réseau configure le routage IPv6 sur le réseau. Quelle commande exécutée sur le routeur HQ permet de configurer une route par défaut vers Internet en vue de transférer les paquets vers un réseau de destination IPv6 qui n'est pas répertorié dans la table de routage ?",
                options: {
                    a: "ipv6 route ::/0 serial 0/0/0",
                    b: "ipv6 route ::/0 serial 0/1/1",
                    c: "ipv6 route ::1/0 serial 0/1/1",
                    d: "ip route 0.0.0.0 0.0.0.0 serial 0/1/1"
                },
                correct: "b",
                explanation: "La commande 'ipv6 route ::/0 serial 0/1/1' configure une route par défaut IPv6. Le préfixe ::/0 correspond à toutes les adresses IPv6, similaire à 0.0.0.0/0 en IPv4. Cette route sera utilisée pour transférer les paquets vers des destinations qui ne correspondent à aucune autre route dans la table de routage IPv6."
            },
            {
                id: 20,
                question: "Quel type de route statique est configuré avec une plus grande distance administrative pour fournir une route de secours vers une route associée à un protocole de routage dynamique ?",
                options: {
                    a: "route statique flottante",
                    b: "Route statique récapitulative",
                    c: "Route statique par défaut",
                    d: "route statique standard"
                },
                correct: "a",
                explanation: "Une route statique flottante est configurée avec une distance administrative plus élevée que celle du protocole de routage dynamique. Cela permet à la route statique de 'flotter' au-dessus de la route dynamique dans la table de routage et de n'être utilisée que si la route dynamique devient indisponible, fournissant ainsi une route de secours."
            },
            {
                id: 21,
                question: "Quelle réponse indique une route statique par défaut IPv4 correctement configurée ?",
                options: {
                    a: "ip route 0.0.0.0 255.255.255.255 S0/0/0",
                    b: "ip route 0.0.0.0 255.255.255.0 S0/0/0",
                    c: "ip route 0.0.0.0 255.0.0.0 S0/0/0",
                    d: "ip route 0.0.0.0 0.0.0.0 S0/0/0"
                },
                correct: "d",
                explanation: "La route statique ip route 0.0.0.0 0.0.0.0 S0/0/0 est considérée comme une route statique par défaut et correspondra à tous les réseaux de destination. Le masque 0.0.0.0 indique que tous les bits de l'adresse de destination peuvent être ignorés, ce qui fait correspondre n'importe quelle adresse IP."
            },
            {
                id: 22,
                question: "Reportez-vous à l'illustration. Quelle commande de route statique peut être entrée sur R1 pour transférer le trafic vers le réseau local connecté à R2?",
                options: {
                    a: "ipv6 route 2001:db8:12:10::/64 S0/0/0 fe80::2",
                    b: "ipv6 route 2001:db8:12:10::/64 S0/0/1 2001:db8:12:10::1",
                    c: "ipv6 route 2001:db8:12:10::/64 S0/0/0",
                    d: "ipv6 route 2001:db8:12:10::/64 S0/0/1 fe80::2"
                },
                correct: "d",
                explanation: "Pour configurer une route statique IPv6 vers un réseau distant en utilisant une adresse lien-local comme adresse de prochain saut, il faut spécifier l'interface de sortie en plus de l'adresse lien-local. La commande correcte est donc 'ipv6 route 2001:db8:12:10::/64 S0/0/1 fe80::2' qui spécifie le réseau de destination, l'interface de sortie et l'adresse lien-local du routeur voisin."
            },
            {
                id: 23,
                question: "Examinez l'illustration. Quelle métrique permet de transférer un paquet de données avec l'adresse de destination IPv6 2001:DB8:ACAD:E:240:BFF:FED4:9DD2 ?",
                options: {
                    a: "90",
                    b: "128",
                    c: "2170112",
                    d: "2681856",
                    e: "2682112",
                    f: "3193856"
                },
                correct: "e",
                explanation: "La métrique 2682112 est celle qui correspond à la route qui sera utilisée pour transférer un paquet vers l'adresse IPv6 2001:DB8:ACAD:E:240:BFF:FED4:9DD2. Dans les tables de routage IPv6, la route avec le préfixe le plus long correspondant à l'adresse de destination est choisie, et en cas d'égalité, celle avec la métrique la plus basse."
            },
            {
                id: 24,
                question: "Examinez l'illustration. Le routeur R1 entretient une relation de voisinage OSPF avec le routeur du FAI sur le réseau 192.168.0.32. La liaison réseau 192.168.0.36 doit servir de liaison de secours si la liaison OSPF tombe en panne. La commande de route statique flottante ip route 0.0.0.0 0.0.0.0 S0/0/1 100 a été exécutée sur R1 et, à présent, le trafic utilise la liaison de secours même lorsque la liaison OSPF est activée et opérationnelle. Quelle modification doit être apportée à la commande de route statique afin que le trafic utilise obligatoirement la liaison OSPF lorsque celle-ci est active ?",
                options: {
                    a: "Configuration du réseau de destination sur 192.168.0.34.",
                    b: "Ajout de l'adresse voisine du tronçon suivant, à savoir 192.168.0.36.",
                    c: "Réglage de la distance administrative sur 1.",
                    d: "Réglage de la distance administrative sur 120."
                },
                correct: "d",
                explanation: "Pour qu'une route statique flottante soit utilisée uniquement comme secours, sa distance administrative doit être supérieure à celle du protocole de routage principal. OSPF a une distance administrative de 110, donc la route statique avec une distance administrative de 100 est préférée. En augmentant la distance administrative à 120, la route OSPF sera préférée tant qu'elle est disponible."
            },
            {
                id: 25,
                question: "Reportez-vous à l'illustration. Quelle route a été configurée comme route statique vers un réseau spécifique en utilisant l'adresse du tronçon suivant ?",
                options: {
                    a: "C 10.16.2.0/24 is directly connected, Serial0/0/0",
                    b: "S 0.0.0.0/0 [1/0] via 10.16.2.2",
                    c: "S 10.17.2.0/24 is directly connected, Serial 0/0/0",
                    d: "S 10.17.2.0/24 [1/0] via 10.16.2.2"
                },
                correct: "d",
                explanation: "La route 'S 10.17.2.0/24 [1/0] via 10.16.2.2' est une route statique (indiquée par 'S') vers le réseau spécifique 10.17.2.0/24 qui utilise l'adresse IP 10.16.2.2 comme adresse du tronçon suivant (next-hop). La notation [1/0] indique une distance administrative de 1 et une métrique de 0."
            },
            {
                id: 26,
                question: "Reportez-vous à l'illustration. Quel trunk ne transmettra aucun trafic au terme du processus de sélection de pont racine ?",
                options: {
                    a: "Trunk1",
                    b: "Trunk2",
                    c: "Trunk3",
                    d: "Trunk4"
                },
                correct: "b",
                explanation: "Après le processus de sélection de pont racine dans STP, un seul chemin reste actif entre deux commutateurs pour éviter les boucles. Les autres chemins sont bloqués. Dans ce cas, Trunk2 a été bloqué par STP et ne transmettra aucun trafic pour éviter une boucle de commutation."
            },
            {
                id: 27,
                question: "Quels sont les deux types de protocoles STP pouvant générer des flux de trafic non optimaux parce qu'ils ne supposent qu'une seule instance Spanning Tree pour le réseau ponté entier ?",
                options: {
                    a: "MSTP",
                    b: "STP",
                    c: "RSTP",
                    d: "PVST+",
                    e: "Rapid PVST+"
                },
                correct: "b,c",
                explanation: "STP (Spanning Tree Protocol) et RSTP (Rapid Spanning Tree Protocol) utilisent une seule instance Spanning Tree pour l'ensemble du réseau ponté, ce qui peut générer des flux de trafic non optimaux. En revanche, PVST+, Rapid PVST+ et MSTP permettent d'avoir plusieurs instances Spanning Tree, ce qui permet d'optimiser les chemins pour différents VLAN."
            },
            {
                id: 28,
                question: "Pour obtenir un aperçu de l'état du mode Spanning Tree d'un réseau commuté, un technicien réseau exécute la commande show spanning-tree sur un commutateur. Quelles informations cette commande permet-elle d'afficher ?",
                options: {
                    a: "L'adresse IP de l'interface VLAN de gestion.",
                    b: "L'ID de pont racine.",
                    c: "Le statut des ports VLAN natifs.",
                    d: "Le rôle des ports sur tous les VLAN.",
                    e: "Le nombre de diffusions reçues sur chaque port racine."
                },
                correct: "b,d",
                explanation: "La commande 'show spanning-tree' affiche des informations sur l'état du protocole Spanning Tree, notamment l'ID du pont racine (qui est le commutateur central du réseau STP) et le rôle des ports sur tous les VLAN (racine, désigné, alternatif, de secours, etc.). Elle ne montre pas l'adresse IP de l'interface VLAN, le statut des ports VLAN natifs ou le nombre de diffusions."
            },
            {
                id: 29,
                question: "Examinez l'illustration. Quelles sont les deux conclusions pouvant être tirées du résultat ?",
                options: {
                    a: "Le canal de port est un canal de couche 3.",
                    b: "La méthode d'équilibrage de charge utilisée est le port source vers le port de destination.",
                    c: "La liaison EtherChannel est en panne.",
                    d: "Le groupement est pleinement opérationnel.",
                    e: "L'ID de canal de port correspond à 2."
                },
                correct: "c,e",
                explanation: "D'après la sortie illustrée, on peut conclure que la liaison EtherChannel est en panne (indiqué par un statut 'down' ou similaire) et que l'ID du canal de port est 2 (Po2 ou Port-channel 2). Les autres informations comme le type de canal (couche 2 ou 3) ou la méthode d'équilibrage de charge ne sont pas visibles dans la sortie présentée."
            },
            {
                id: 30,
                question: "Quelle action se déroule lorsqu'une trame entrant dans un commutateur a une adresse MAC de destination monodiffusion apparaissant dans la table d'adresses MAC?",
                options: {
                    a: "Le commutateur réinitialise le minuteur d'actualisation sur toutes les entrées de table d'adresses MAC.",
                    b: "Le commutateur met à jour le minuteur d'actualisation de l'entrée.",
                    c: "Le commutateur transmet la trame à tous les ports, sauf au port d'arrivée.",
                    d: "Le commutateur transmet le cadre hors du port spécifié."
                },
                correct: "d",
                explanation: "Lorsqu'un commutateur reçoit une trame avec une adresse MAC de destination qui existe dans sa table d'adresses MAC, il transmet cette trame uniquement par le port associé à cette adresse MAC dans la table. C'est le principe de commutation qui permet d'éviter d'inonder tous les ports avec du trafic non nécessaire."
            },
            {
                id: 31,
                question: "Reportez-vous à l'illustration. Un administrateur réseau a ajouté un nouveau sous-réseau au réseau et veut que les hôtes du sous-réseau reçoivent des adresses IPv4 du serveur DHCPv4. Quelles commandes permettent aux hôtes du nouveau sous-réseau de recevoir des adresses du serveur DHCPv4 ?",
                options: {
                    a: "R1(config)# interface G0/0",
                    b: "R1(config)# interface G0/1",
                    c: "R1(config-if)# ip helper-address 10.1.0.254",
                    d: "R2(config-if)# ip helper-address 10.2.0.250",
                    e: "R1(config-if)# ip helper-address 10.2.0.250",
                    f: "R2(config)# interface G0/0"
                },
                correct: "a,e",
                explanation: "La commande ip helper-address est utilisée pour configurer un routeur comme relais DHCPv4. La commande doit être placée sur l'interface face aux clients DHCPv4. Lorsque la commande est appliquée sur l'interface du routeur, l'interface recevra les messages de diffusion DHCPv4 et les transmettra en monodiffusion à l'adresse IP du serveur DHCPv4."
            },
            {
                id: 32,
                question: "Quelle action prend un client DHCPv4 s'il reçoit plus d'un DHCPOFFER de plusieurs serveurs DHCP?",
                options: {
                    a: "Il envoie un DHCPNAK et recommence le processus DHCP.",
                    b: "Il envoie un DHCPREQUEST qui identifie l'offre de location que le client accepte.",
                    c: "Il rejette les deux offres et envoie un nouveau DHCPDISCOVER.",
                    d: "Il accepte les deux messages DHCPOFFER et envoie un DHCPACK."
                },
                correct: "b",
                explanation: "Lorsqu'un client DHCPv4 reçoit plusieurs offres DHCPOFFER de différents serveurs DHCP, il choisit l'une des offres (généralement la première reçue) et envoie un message DHCPREQUEST en diffusion qui identifie spécifiquement le serveur dont il accepte l'offre. Cela permet aux autres serveurs de savoir que leur offre n'a pas été acceptée."
            },
            {
                id: 33,
                question: "Examinez l'illustration. Si les adresses IP du routeur de passerelle par défaut et du serveur de noms de domaine (DNS) sont correctes, quel est le problème de cette configuration ?",
                options: {
                    a: "Les commandes default-router et dns-server doivent être configurées avec des masques de sous-réseau.",
                    b: "L'adresse IP du serveur de noms de domaine (DNS) ne figure pas dans la liste d'adresses exclues.",
                    c: "L'adresse IP du routeur de passerelle par défaut ne figure pas dans la liste d'adresses exclues.",
                    d: "Le serveur de noms de domaine (DNS) et le routeur de passerelle par défaut doivent faire partie du même sous-réseau."
                },
                correct: "c",
                explanation: "Dans une configuration DHCP, les adresses IP statiques comme celles du routeur de passerelle par défaut doivent être exclues de la plage d'adresses attribuables par le serveur DHCP. Si l'adresse IP du routeur n'est pas exclue, le serveur DHCP pourrait l'attribuer à un client, ce qui créerait un conflit d'adresses IP."
            },
            {
                id: 34,
                question: "Les utilisateurs de la succursale ont pu accéder à un site le matin, mais n'ont pas eu de connectivité avec le site depuis l'heure du déjeuner. Que faut-il faire ou vérifier?",
                options: {
                    a: "Vérifiez la configuration sur l'itinéraire statique flottant et ajustez l'AD.",
                    b: "Utilisez la commande « show ip interface brief » pour voir si une interface est en panne.",
                    c: "Créez un itinéraire statique flottant vers ce réseau.",
                    d: "Vérifiez que la route statique vers le serveur est présente dans la table de routage."
                },
                correct: "b",
                explanation: "Lorsqu'une connectivité qui fonctionnait auparavant cesse soudainement de fonctionner, il est judicieux de vérifier d'abord l'état des interfaces physiques. La commande 'show ip interface brief' permet de voir rapidement si une interface est tombée en panne (down), ce qui pourrait expliquer la perte de connectivité."
            },
            {
                id: 35,
                question: "Associez la caractéristique de transmission à son type.",
                options: {
                    a: "Cut-through: Convient aux applications informatiques hautement performantes.",
                    b: "Store-and-forward: Contrôle les erreurs avant la transmission.",
                    c: "Cut-through: Le processus de transmission peut démarrer dès la réception de l'adresse de destination.",
                    d: "Store-and-forward: Le processus de transmission peut démarrer uniquement après avoir reçu la totalité de la trame.",
                    e: "Cut-through: Les trames non valides peuvent être transmises.",
                    f: "Store-and-forward: Seules les trames valides sont transmises."
                },
                correct: "a,b,c,d,e,f",
                explanation: "La commutation cut-through commence à transmettre dès la réception de l'adresse de destination, ce qui la rend plus rapide mais peut transmettre des trames non valides. Elle convient aux applications à haute performance. La commutation store-and-forward attend de recevoir toute la trame, vérifie les erreurs et ne transmet que les trames valides."
            },
            {
                id: 36,
                question: "Quelles informations un commutateur utilise-t-il pour renseigner la table d'adresses MAC ?",
                options: {
                    a: "les adresses MAC source et de destination et le port entrant",
                    b: "l'adresse MAC de destination et le port sortant",
                    c: "les adresses MAC source et de destination et le port sortant",
                    d: "l'adresse MAC source et le port sortant",
                    e: "l'adresse MAC de destination et le port entrant",
                    f: "l'adresse MAC source et le port entrant"
                },
                correct: "f",
                explanation: "Un commutateur apprend les adresses MAC en examinant l'adresse MAC source de chaque trame qu'il reçoit et en associant cette adresse MAC au port sur lequel la trame est arrivée. Cette information est stockée dans la table d'adresses MAC (ou table CAM) du commutateur."
            },
            {
                id: 37,
                question: "Pour quelles raisons un administrateur réseau segmenterait-il un réseau avec un commutateur de couche 2 ?",
                options: {
                    a: "Pour créer moins de domaines de collision.",
                    b: "Pour éliminer les circuits virtuels.",
                    c: "Pour créer plus de domaines de diffusion.",
                    d: "Pour isoler les messages de requête ARP du reste du réseau.",
                    e: "Pour isoler le trafic entre les segments.",
                    f: "Pour améliorer la bande passante utilisateur."
                },
                correct: "e,f",
                explanation: "La segmentation d'un réseau avec un commutateur de couche 2 permet d'isoler le trafic entre les segments (chaque port du commutateur forme un domaine de collision distinct) et d'améliorer la bande passante utilisateur en réduisant les contentions pour l'accès au média. Cependant, un commutateur de couche 2 ne crée pas de domaines de diffusion supplémentaires."
            },
            {
                id: 38,
                question: "Un technicien dépannage un WLAN lent et décide d'utiliser l'approche de répartition du trafic. Quels deux paramètres devraient être configurés pour le faire?",
                options: {
                    a: "Configurer le mode de sécurité sur WPA Personal TKIP/AES pour un réseau et WPA2 Personal AES pour l'autre réseau",
                    b: "Configurez le mode de sécurité sur WPA Personal TKIP/AES pour les deux réseaux.",
                    c: "Configurez la bande 5 GHz pour le streaming multimédia et le trafic temporel.",
                    d: "Configurez un SSID commun pour les deux réseaux fractionnés.",
                    e: "Configurez la bande 2,4 GHz pour le trafic Internet de base qui n'est pas sensible au temps."
                },
                correct: "c,e",
                explanation: "Pour répartir efficacement le trafic sur un réseau sans fil, il est recommandé d'utiliser la bande 5 GHz pour le trafic exigeant en bande passante comme le streaming multimédia, car elle offre plus de canaux et moins d'interférences. La bande 2,4 GHz peut être utilisée pour le trafic Internet de base moins sensible à la latence, comme la navigation web ou les e-mails."
            },
            {
                id: 39,
                question: "Sur un Cisco 3504 WLC Summary page (Advanced > Summary), quel onglet permet à un administrateur réseau de configurer un WLAN particulier avec une stratégie WPA2?",
                options: {
                    a: "SÉCURITÉ",
                    b: "SANS FIL",
                    c: "Réseaux locaux sans fil",
                    d: "GESTION"
                },
                correct: "c",
                explanation: "Sur un contrôleur sans fil Cisco 3504, l'onglet 'Réseaux locaux sans fil' (WLANs) est utilisé pour configurer les paramètres spécifiques à un WLAN, y compris les politiques de sécurité comme WPA2. C'est dans cet onglet que l'administrateur peut définir les méthodes d'authentification et de chiffrement pour chaque WLAN."
            },
            {
                id: 40,
                question: "Un administrateur réseau ajoute un nouveau WLAN sur un WLC Cisco 3500. Quel onglet l'administrateur doit-il utiliser pour créer une nouvelle interface VLAN à utiliser pour le nouveau WLAN?",
                options: {
                    a: "GESTION",
                    b: "CONTRÔLEUR",
                    c: "Réseaux locaux sans fil",
                    d: "SANS FIL"
                },
                correct: "b",
                explanation: "Sur un contrôleur sans fil Cisco 3500, l'onglet 'CONTRÔLEUR' est utilisé pour configurer les interfaces du contrôleur, y compris les interfaces VLAN. C'est dans cet onglet que l'administrateur peut créer une nouvelle interface VLAN qui sera ensuite associée à un WLAN spécifique."
            },
            {
                id: 41,
                question: "Quel est l'effet de l'entrée de la commande de configuration switchport mode access sur un commutateur?",
                options: {
                    a: "Il spécifie le nombre maximal d'adresses L2 autorisées sur un port.",
                    b: "Il désactive le PAO sur une interface non-trunking.",
                    c: "Il active le DAI sur des interfaces de commutation spécifiques précédemment configurées avec la surveillance DHCP.",
                    d: "Il active manuellement un lien de trunk."
                },
                correct: "b",
                explanation: "La commande 'switchport mode access' configure un port de commutateur en mode d'accès, ce qui désactive le protocole d'agrégation de ports (PAO ou DTP - Dynamic Trunking Protocol) sur cette interface. Cela empêche le port de négocier automatiquement un lien trunk, le forçant à rester en mode d'accès."
            },
            {
                id: 42,
                question: "Reportez-vous à l'illustration. L'administrateur réseau configure les deux commutateurs comme illustré. Cependant, l'hôte C ne peut envoyer de requête ping à l'hôte D et l'hôte E ne peut envoyer de requête ping à l'hôte F. Quelle action l'administrateur doit-il effectuer pour activer cette communication ?",
                options: {
                    a: "Inclure un routeur dans la topologie.",
                    b: "Associer les hôtes A et B avec le VLAN 10 au lieu du VLAN 1.",
                    c: "Configurer un port trunk en mode dynamic desirable.",
                    d: "Supprimer le VLAN natif de l'agrégation.",
                    e: "Ajouter la commande switchport nonegotiate à la configuration de SW2."
                },
                correct: "c",
                explanation: "Pour permettre la communication entre les hôtes de différents commutateurs mais dans le même VLAN, un lien trunk doit être établi entre les commutateurs. Configurer un port en mode 'dynamic desirable' permet d'initier activement la négociation d'un lien trunk avec le commutateur voisin, ce qui permettra au trafic des VLAN de traverser le lien entre les commutateurs."
            },
            {
                id: 43,
                question: "Associez l'étape à la description de la séquence d'amorçage du commutateur correspondante.",
                options: {
                    a: "Étape 1: Exécution du POST",
                    b: "Étape 2: Chargement du programme d'amorçage à partir de la mémoire morte (ROM)",
                    c: "Étape 3: Initialisations du registre du processeur",
                    d: "Étape 4: Initialisation du système de fichiers Flash",
                    e: "Étape 5: Charger le logiciel IOS",
                    f: "Étape 6: contrôle de la commutation de transfert à l'IOS"
                },
                correct: "a,b,c,d,e,f",
                explanation: "La séquence d'amorçage d'un commutateur Cisco suit ces étapes dans l'ordre: 1) Exécution du POST (Power-On Self Test), 2) Chargement du programme d'amorçage depuis la ROM, 3) Initialisation du registre du processeur, 4) Initialisation du système de fichiers Flash, 5) Chargement du logiciel IOS, et 6) Transfert du contrôle à l'IOS."
            },
            {
                id: 44,
                question: "Reportez-vous à l'illustration. Supposons que le courant vient juste d'être rétabli. PC3 émet une requête de diffusion DHCP IPv4. À quel port SW1 transmet-il cette requête ?",
                options: {
                    a: "À Fa0/1, à Fa0/2 et à Fa0/3 uniquement",
                    b: "À Fa0/1, à Fa0/2 et à Fa0/4 uniquement",
                    c: "À Fa0/1 uniquement",
                    d: "À Fa0/1, à Fa0/2, à Fa0/3 et à Fa0/4",
                    e: "À Fa0/1 et à Fa0/2 uniquement"
                },
                correct: "a",
                explanation: "Lorsqu'un commutateur reçoit une trame de diffusion (comme une requête DHCP), il la transmet à tous les ports du même VLAN, à l'exception du port d'entrée. Si PC3 est dans le VLAN 1 et connecté au port Fa0/4, alors SW1 transmettra la diffusion aux ports Fa0/1, Fa0/2 et Fa0/3 qui sont également dans le VLAN 1."
            },
            {
                id: 45,
                question: "Quel préfixe IPv6 est conçu pour la communication lien-local?",
                options: {
                    a: "2001::/3",
                    b: "fe80::/10",
                    c: "fc::/07",
                    d: "ff00::/8"
                },
                correct: "b",
                explanation: "Le préfixe fe80::/10 est réservé pour les adresses IPv6 lien-local. Ces adresses sont utilisées pour la communication entre des nœuds sur un même segment de réseau (lien) et ne sont pas routables au-delà de ce lien. Elles sont automatiquement configurées sur les interfaces IPv6 et sont essentielles pour des fonctions comme la découverte de voisins."
            },
            {
                id: 46,
                question: "Comment un routeur gère-t-il le routage statique si Cisco Express Forwarding est désactivé ?",
                options: {
                    a: "Il n'effectue pas de recherches récursives.",
                    b: "Les interfaces série point à point nécessitent des routes statiques entièrement spécifiées pour éviter des incohérences au niveau du routage.",
                    c: "Les interfaces Ethernet à accès multiple nécessitent des routes statiques entièrement spécifiées pour éviter des incohérences au niveau du routage.",
                    d: "Les routes statiques utilisant une interface de sortie sont inutiles."
                },
                correct: "c",
                explanation: "Sans Cisco Express Forwarding (CEF), les interfaces Ethernet à accès multiple nécessitent des routes statiques entièrement spécifiées (avec l'adresse du prochain saut) pour éviter des incohérences de routage. Cela est dû au fait que ces interfaces peuvent avoir plusieurs voisins, et le routeur a besoin de savoir exactement à quel voisin envoyer le paquet."
            },
            {
                id: 47,
                question: "Reportez-vous à l'illustration. Que peut-on conclure de la configuration affichée sur R1?",
                options: {
                    a: "R1 fonctionne comme un serveur DHCPv4.",
                    b: "R1 enverra un message à un client DHCPv4 local pour contacter un serveur DHCPv4 au 10.10.8.",
                    c: "R1 diffusera les demandes DHCPv4 au nom des clients DHCPv4 locaux.",
                    d: "Configurez R1 en tant qu'agent de relais DHCP."
                },
                correct: "d",
                explanation: "La configuration montrée sur R1 indique qu'il est configuré comme un agent de relais DHCP. La commande 'ip helper-address' sur une interface permet au routeur de relayer les diffusions DHCP reçues sur cette interface vers un serveur DHCP spécifié par l'adresse IP, dans ce cas 10.10.8.x."
            },
            {
                id: 48,
                question: "Quelle action se déroule lorsque l'adresse MAC source d'un cadre entrant dans un commutateur n'est pas dans la table d'adresses MAC?",
                options: {
                    a: "Le commutateur ajoute à la table l'adresse MAC et le numéro de port entrant.",
                    b: "Le commutateur transmet la trame à tous les ports, sauf au port d'arrivée.",
                    c: "Le commutateur ajoute un mappage d'entrée de table d'adresses MAC pour l'adresse MAC de destination et le port d'entrée.",
                    d: "Le commutateur transmet le cadre hors du port spécifié."
                },
                correct: "a",
                explanation: "Lorsqu'un commutateur reçoit une trame avec une adresse MAC source qui n'est pas dans sa table d'adresses MAC, il ajoute cette adresse MAC à sa table en l'associant au port d'entrée. C'est ainsi que le commutateur apprend dynamiquement les adresses MAC des périphériques connectés à son réseau."
            },
            {
                id: 49,
                question: "Le routage inter-VLAN réussi fonctionne depuis un certain temps sur un réseau avec plusieurs VLAN sur plusieurs commutateurs. Lorsqu'une liaison de jonction entre commutateurs échoue et que le protocole Spanning Tree affiche une liaison de jonction de sauvegarde, il est signalé que les hôtes de deux VLAN peuvent accéder à certaines ressources réseau, mais pas à toutes les ressources précédemment accessibles. Les hôtes sur tous les autres VLAN n'ont pas ce problème. Quelle est la cause la plus probable de ce problème?",
                options: {
                    a: "Le routage inter-VLAN a également échoué lorsque le lien de jonction a échoué.",
                    b: "Le protocole de jonction dynamique sur la liaison a échoué.",
                    c: "Les VLAN autorisés sur la liaison de sauvegarde n'ont pas été configurés correctement.",
                    d: "La fonction de port de bord protégé sur les interfaces de jonction de sauvegarde a été désactivée."
                },
                correct: "c",
                explanation: "Si seuls deux VLAN ont des problèmes après le basculement vers une liaison de jonction de sauvegarde, la cause la plus probable est que ces deux VLAN n'ont pas été correctement configurés pour être autorisés sur la liaison de sauvegarde. Par défaut, tous les VLAN sont autorisés sur un lien trunk, mais cette configuration peut être modifiée avec la commande 'switchport trunk allowed vlan'."
            },
            {
                id: 50,
                question: "Un administrateur réseau utilise le modèle « Router-on-a-Stick » pour configurer un commutateur et un routeur pour le routage inter-VLAN. Comment le port du commutateur connecté au routeur doit-il être configuré ?",
                options: {
                    a: "Il doit être configuré comme port agrégé 802.1q.",
                    b: "Il doit être configuré comme port d'accès et membre de VLAN 1.",
                    c: "Il doit être configuré comme port agrégé et affecté au VLAN 1.",
                    d: "Il doit être configuré comme port agrégé et n'autoriser que le trafic non étiqueté."
                },
                correct: "a",
                explanation: "Dans le modèle 'Router-on-a-Stick' pour le routage inter-VLAN, le port du commutateur connecté au routeur doit être configuré comme un port trunk (agrégé) 802.1q. Cela permet au trafic de plusieurs VLAN de traverser le même lien physique entre le commutateur et le routeur, avec des étiquettes VLAN pour distinguer le trafic de chaque VLAN."
            },
            {
                id: 51,
                question: "Pourquoi l'espionnage DHCP est-il nécessaire lors de l'utilisation de la fonction Dynamic ARP Inspection?",
                options: {
                    a: "Il utilise la table d'adresses MAC pour vérifier l'adresse IP de la passerelle par défaut.",
                    b: "Il s'appuie sur les paramètres des ports approuvés et non approuvés définis par l'espionnage DHCP.",
                    c: "Il utilise la base de données de liaison d'adresse MAC à adresse IP pour valider un paquet ARP.",
                    d: "Il redirige les demandes ARP vers le serveur DHCP pour vérification."
                },
                correct: "c",
                explanation: "La fonction Dynamic ARP Inspection (DAI) utilise la base de données de liaison d'adresse MAC à adresse IP créée par l'espionnage DHCP (DHCP snooping) pour valider les paquets ARP. Cette base de données contient des mappings fiables entre adresses MAC et adresses IP, ce qui permet à DAI de vérifier que les paquets ARP contiennent des informations cohérentes et légitimes."
            },
            {
                id: 52,
                question: "Reportez-vous à l'illustration. Un administrateur réseau a configuré les routeurs R1 et R2 comme faisant partie du groupe HSRP 1. Après le rechargement des routeurs, un utilisateur associé à l'hôte 1 s'est plaint d'une mauvaise connectivité à Internet. L'administrateur réseau a donc exécuté la commande show standby brief sur les deux routeurs pour vérifier le fonctionnement du protocole HSRP. En outre, l'administrateur a observé le tableau ARP sur Host1. Quelle entrée doit apparaître dans le tableau ARP sur Host1 pour acquérir la connectivité à Internet?",
                options: {
                    a: "L'adresse IP virtuelle et l'adresse MAC virtuelle du groupe HSRP 1",
                    b: "L'adresse IP virtuelle du groupe HSRP 1 et l'adresse MAC de R1",
                    c: "L'adresse IP virtuelle du groupe HSRP 1 et l'adresse MAC de R2",
                    d: "L'adresse IP et l'adresse MAC de R1"
                },
                correct: "a",
                explanation: "Pour que HSRP fonctionne correctement, l'hôte doit avoir dans sa table ARP l'adresse IP virtuelle du groupe HSRP associée à l'adresse MAC virtuelle du groupe HSRP (et non à l'adresse MAC physique de l'un des routeurs). Cela permet à l'hôte de continuer à communiquer avec la même adresse MAC même si le routeur actif change."
            },
            {
                id: 53,
                question: "Une route statique a été configurée sur un routeur. Cependant, le réseau de destination n'existe plus. Que doit faire un administrateur pour supprimer l'itinéraire statique de la table de routage ?",
                options: {
                    a: "Rien. La route statique disparaîtra d'elle-même.",
                    b: "Supprimez l'itinéraire en utilisant la commande no ip route.",
                    c: "Modifier la distance administrative pour cet itinéraire.",
                    d: "Modifier les mesures de routage pour cet itinéraire."
                },
                correct: "b",
                explanation: "Contrairement aux routes dynamiques, les routes statiques ne disparaissent pas automatiquement lorsque le réseau de destination n'est plus accessible. Pour supprimer une route statique de la table de routage, l'administrateur doit utiliser la commande 'no ip route' suivie des mêmes paramètres que ceux utilisés pour créer la route."
            },
            {
                id: 54,
                question: "Un technicien junior ajoutait un itinéraire à un routeur LAN. Un traceroute vers un périphérique sur le nouveau réseau a révélé un mauvais chemin et un état inaccessible. Que faut-il faire ou vérifier?",
                options: {
                    a: "Vérifiez la configuration sur l'itinéraire statique flottant et ajustez l'AD.",
                    b: "Vérifiez la configuration de l'interface de sortie sur la nouvelle route statique.",
                    c: "Créez un itinéraire statique flottant vers ce réseau.",
                    d: "Vérifiez qu'il n'y a pas de route par défaut dans les tables de routage du routeur périphérique."
                },
                correct: "b",
                explanation: "Si un traceroute montre un mauvais chemin et un état inaccessible après l'ajout d'une nouvelle route statique, il est probable que l'interface de sortie spécifiée dans la route soit incorrecte ou que l'adresse du prochain saut soit mal configurée. Il faut vérifier que l'interface de sortie est correcte et opérationnelle."
            },
            {
                id: 55,
                question: "Quelle méthode d'authentification sans fil dépend d'un serveur d'authentification RADIUS ?",
                options: {
                    a: "WPA Personal",
                    b: "WPA2 Personal",
                    c: "WEP",
                    d: "WPA2 Enterprise"
                },
                correct: "d",
                explanation: "WPA2 Enterprise utilise le protocole 802.1X pour l'authentification, qui nécessite un serveur d'authentification RADIUS. Ce serveur vérifie les identifiants des utilisateurs et autorise ou refuse l'accès au réseau. Les méthodes Personal (WPA/WPA2) utilisent une clé pré-partagée (PSK) et ne nécessitent pas de serveur d'authentification externe."
            },
            {
                id: 56,
                question: "Quels sont les deux paramètres définis par défaut sur un routeur sans fil pouvant affecter la sécurité du réseau ?",
                options: {
                    a: "Le SSID est diffusé.",
                    b: "Le filtrage des adresses MAC est activé.",
                    c: "Le chiffrement WEP est activé.",
                    d: "Le canal sans fil est automatiquement sélectionné.",
                    e: "Un mot de passe administrateur réservé est défini."
                },
                correct: "a,e",
                explanation: "Par défaut, la plupart des routeurs sans fil diffusent leur SSID, ce qui permet à n'importe qui de voir le réseau, et utilisent un mot de passe administrateur par défaut (souvent 'admin' ou 'password'). Ces deux paramètres peuvent compromettre la sécurité du réseau si un attaquant peut voir le réseau et accéder à l'interface d'administration avec des identifiants par défaut."
            },
            {
                id: 57,
                question: "Un administrateur réseau d'une petite société de publicité configure la sécurité WLAN à l'aide de la méthode PSK WPA2. Quelles informations d'identification les utilisateurs de bureau ont-ils besoin pour connecter leurs ordinateurs portables au WLAN?",
                options: {
                    a: "une clé qui correspond à la clé sur l'AP",
                    b: "un nom d'utilisateur et un mot de passe configurés sur l'AP",
                    c: "le nom d'utilisateur et le mot de passe de l'entreprise via le service Active Directory",
                    d: "Phrase secrète de l'utilisateur"
                },
                correct: "d",
                explanation: "Avec WPA2-PSK (Pre-Shared Key), les utilisateurs doivent entrer une phrase secrète (passphrase) pour se connecter au réseau sans fil. Cette phrase secrète est la même pour tous les utilisateurs et est configurée sur le point d'accès. Le système génère ensuite une clé de chiffrement unique pour chaque session à partir de cette phrase secrète."
            },
            {
                id: 58,
                question: "Quelle commande permet de créer une route statique sur R2 pour atteindre PC B ?",
                options: {
                    a: "R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.2.254",
                    b: "R2(config)# ip route 172.16.2.1 255.255.255.0 172.16.3.1",
                    c: "R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1",
                    d: "R2(config)# ip route 172.16.3.0 255.255.255.0 172.16.2.254"
                },
                correct: "c",
                explanation: "Pour créer une route statique vers le réseau où se trouve PC B (172.16.2.0/24), R2 doit être configuré avec la commande 'ip route 172.16.2.0 255.255.255.0 172.16.3.1'. Cette commande indique que pour atteindre le réseau 172.16.2.0/24, les paquets doivent être envoyés à l'adresse IP 172.16.3.1, qui est probablement l'interface du routeur voisin connectée au réseau 172.16.3.0/24."
            },
            {
                id: 59,
                question: "Reportez-vous à l'illustration. R1 a été configuré avec la commande de route statique ip route 209.165.200.224 255.255.255.224 S0/0/0 et, par conséquent, les utilisateurs du réseau 172.16.0.0/16 ne peuvent pas accéder aux ressources sur Internet. Comment cette route statique doit-elle être modifiée pour permettre au trafic utilisateur du LAN d'accéder à Internet ?",
                options: {
                    a: "En ajoutant une distance administrative de 254.",
                    b: "En configurant le réseau et le masque de destination sur 0.0.0.0 0.0.0.0.",
                    c: "En choisissant S0/0/1 comme l'interface de sortie.",
                    d: "En ajoutant l'adresse voisine du tronçon suivant, à savoir 209.165.200.226."
                },
                correct: "b",
                explanation: "Pour permettre l'accès à Internet, une route par défaut doit être configurée avec le réseau et le masque de destination 0.0.0.0 0.0.0.0. La route actuelle ne dirige que le trafic vers le réseau spécifique 209.165.200.224/27, mais pas vers les autres réseaux d'Internet. Une route par défaut (0.0.0.0/0) achemine tout le trafic non correspondant à d'autres routes vers Internet."
            },
            {
                id: 60,
                question: "Quel est le risque associé à la méthode de la base de données locale pour la sécurisation de l'accès des appareils qui peut être réalisée au moyen de AAA sur des serveurs centralisés ?",
                options: {
                    a: "Les mots de passe peuvent être stockés uniquement en texte brut dans la configuration en cours.",
                    b: "Elle est très vulnérable aux attaques de force brute en raison de l'absence de nom d'utilisateur.",
                    c: "Elle n'offre aucun moyen d'établir les responsabilités.",
                    d: "Les comptes des utilisateurs doivent être configurés localement sur chaque appareil, ce qui est une solution d'authentification non évolutive."
                },
                correct: "d",
                explanation: "Le principal inconvénient de l'utilisation d'une base de données locale pour l'authentification est le manque d'évolutivité. Chaque compte utilisateur doit être configuré et maintenu séparément sur chaque appareil du réseau. Avec un grand nombre d'utilisateurs et d'appareils, cela devient rapidement ingérable. Les serveurs AAA centralisés résolvent ce problème en fournissant un point unique de gestion des comptes utilisateurs."
            },
            {
                id: 61,
                question: "Qu'est-ce qu'une méthode pour lancer une attaque de saut VLAN?",
                options: {
                    a: "inondation du commutateur avec des adresses MAC",
                    b: "envoi d'adresses IP usurpées à partir de l'hôte attaquant",
                    c: "introduction d'un commutateur non fiable et activation de la trunking",
                    d: "envoi d'informations de VLAN natif usurpé"
                },
                correct: "c",
                explanation: "Une attaque de saut VLAN (VLAN hopping) peut être réalisée en introduisant un commutateur non fiable dans le réseau et en activant la négociation de trunking (DTP). Si le commutateur légitime est configuré pour négocier automatiquement les liens trunk, l'attaquant peut établir un lien trunk et accéder à tous les VLAN, contournant ainsi la segmentation de sécurité fournie par les VLAN."
            },
            {
                id: 62,
                question: "Quel protocole ou technologie utilise l'adresse IP source vers l'adresse IP de destination comme mécanisme d'équilibrage de charge?",
                options: {
                    a: "EtherChannel",
                    b: "HSRP",
                    c: "Protocole VTP",
                    d: "DTP"
                },
                correct: "a",
                explanation: "EtherChannel peut utiliser différentes méthodes d'équilibrage de charge, dont l'une est basée sur les adresses IP source et destination. Cette méthode permet de distribuer le trafic entre les différentes liaisons physiques qui composent le canal EtherChannel en fonction des adresses IP des paquets, ce qui peut offrir une meilleure distribution du trafic que les méthodes basées uniquement sur les adresses MAC."
            },
            {
                id: 63,
                question: "Examinez l'illustration. Tous les commutateurs affichés sont des modèles Cisco 2960 dont la priorité par défaut est identique et fonctionnant à la même bande passante. Quels sont les trois ports qui seront désignés pour STP ?",
                options: {
                    a: "Fa0/9",
                    b: "Fa0/10",
                    c: "Fa0/21",
                    d: "Fa0/11",
                    e: "Fa0/13",
                    f: "Fa0/20"
                },
                correct: "b,c,e",
                explanation: "Dans le protocole Spanning Tree (STP), les ports désignés sont sélectionnés en fonction de plusieurs critères, notamment le coût du chemin vers le pont racine. Dans cette configuration où tous les commutateurs ont la même priorité et la même bande passante, les ports Fa0/10, Fa0/21 et Fa0/13 ont été sélectionnés comme ports désignés car ils offrent le meilleur chemin vers le pont racine pour leurs segments respectifs."
            },
            {
                id: 64,
                question: "Un ingénieur WLAN déploie un WLC et cinq points d'accès sans fil à l'aide du protocole CAPWAP avec la fonction DTLS pour sécuriser le plan de contrôle des périphériques réseau. Lors du test du réseau sans fil, l'ingénieur WLAN remarque que le trafic de données est en cours d'échange entre le WLC et les AP en texte brut et qu'il n'est pas crypté. Quelle est la raison la plus probable pour cela?",
                options: {
                    a: "Bien que DTLS soit activé par défaut pour sécuriser le canal de contrôle CAPWAP, il est désactivé par défaut pour le canal de données.",
                    b: "Le chiffrement des données nécessite l'installation d'une licence DTLS sur chaque point d'accès (AP) avant d'être activé sur le contrôleur de réseau local sans fil (WLC).",
                    c: "DTLS est un protocole qui fournit uniquement la sécurité entre le point d'accès (AP) et le client sans fil.",
                    d: "DTLS fournit uniquement la sécurité des données par authentification et ne fournit pas de chiffrement pour le déplacement des données entre un contrôleur de réseau local sans fil (WLC) et un point d'accès (AP)."
                },
                correct: "a",
                explanation: "Dans une architecture WLAN Cisco avec CAPWAP (Control And Provisioning of Wireless Access Points), DTLS (Datagram Transport Layer Security) est activé par défaut pour sécuriser le canal de contrôle, mais il est désactivé par défaut pour le canal de données. Pour chiffrer le trafic de données entre le WLC et les AP, l'administrateur doit explicitement activer le chiffrement DTLS pour le canal de données."
            },
            {
                id: 65,
                question: "Contrairement aux routes dynamiques, quels sont les avantages qu'offre l'utilisation des routes statiques sur un routeur ?",
                options: {
                    a: "Elles changent automatiquement le chemin vers le réseau de destination en cas de modification de la topologie.",
                    b: "Elles améliorent l'efficacité de découverte des réseaux voisins.",
                    c: "Elles utilisent moins de ressources du routeur.",
                    d: "Elles améliorent la sécurité du réseau.",
                    e: "Elles prennent moins de temps pour converger en cas de modification de la topologie de réseau."
                },
                correct: "c,d",
                explanation: "Les routes statiques offrent deux avantages principaux par rapport aux routes dynamiques: 1) Elles utilisent moins de ressources du routeur car elles ne nécessitent pas d'échanges périodiques de mises à jour de routage, et 2) Elles améliorent la sécurité du réseau car elles permettent un contrôle précis des chemins de routage et ne divulguent pas d'informations sur la topologie du réseau."
            },
            {
                id: 66,
                question: "Examinez l'illustration. R1 a été configuré comme illustré. Cependant, PC1 ne parvient pas à recevoir d'adresse IPv4. Quel est le problème ?",
                options: {
                    a: "La commande ip address dhcp n'a pas été exécutée sur l'interface Gi0/1.",
                    b: "R1 n'est pas configuré comme serveur DHCPv4.",
                    c: "La commande ip helper-address n'a pas été exécutée sur l'interface correcte.",
                    d: "Un serveur DHCP doit être installé sur le même LAN que l'hôte qui reçoit l'adresse IP."
                },
                correct: "c",
                explanation: "Le problème est que la commande 'ip helper-address' a été configurée sur la mauvaise interface. Cette commande doit être configurée sur l'interface qui fait face aux clients DHCP (dans ce cas, probablement Gi0/1 où PC1 est connecté), et non sur l'interface qui fait face au serveur DHCP. La commande permet au routeur de relayer les diffusions DHCP des clients vers le serveur DHCP spécifié."
            },
            {
                id: 67,
                question: "Quel est l'effet de l'entrée de la commande de configuration ip arp inspection vlan 10 sur un commutateur?",
                options: {
                    a: "Il active le DAI sur des interfaces de commutation spécifiques précédemment configurées avec la surveillance DHCP.",
                    b: "Activez globalement la surveillance DHCP (snooping) sur le commutateur.",
                    c: "Il spécifie le nombre maximal d'adresses L2 autorisées sur un port.",
                    d: "Il permet globalement la garde BPDU sur tous les ports compatibles PortFast."
                },
                correct: "a",
                explanation: "La commande 'ip arp inspection vlan 10' active la fonction Dynamic ARP Inspection (DAI) sur le VLAN 10. DAI utilise la base de données de liaison créée par DHCP snooping pour valider les paquets ARP sur les interfaces configurées. Cette fonction aide à prévenir les attaques d'empoisonnement ARP en vérifiant que les paquets ARP contiennent des informations valides."
            },
            {
                id: 68,
                question: "Quelle action se déroule lorsque l'adresse MAC source d'un cadre entrant dans un commutateur apparaît dans la table d'adresses MAC associée à un port différent?",
                options: {
                    a: "Le commutateur transmet le cadre hors du port spécifié.",
                    b: "Le commutateur met à jour le minuteur d'actualisation de l'entrée.",
                    c: "Le commutateur purge toute la table d'adresses MAC.",
                    d: "Le commutateur remplace l'ancienne entrée et utilise le port le plus courant."
                },
                correct: "d",
                explanation: "Lorsqu'un commutateur reçoit une trame avec une adresse MAC source qui existe déjà dans sa table d'adresses MAC mais associée à un port différent, il suppose que le périphérique a été déplacé vers un nouveau port. Le commutateur met alors à jour sa table en remplaçant l'ancienne entrée par la nouvelle association port-adresse MAC."
            },
            {
                id: 69,
                question: "Reportez-vous à l'illustration. Actuellement, le routeur R1 utilise une route EIGRP enregistrée via Branch2 pour atteindre le réseau 10.10.0.0/16. Quelle route statique flottante crée une route de secours vers le réseau 10.10.0.0/16 au cas où la liaison entre R1 et Branch2 serait interrompue ?",
                options: {
                    a: "ip route 10.10.0.0 255.255.0.0 Serial 0/0/0 100",
                    b: "ip route 10.10.0.0 255.255.0.0 209.165.200.226 100",
                    c: "ip route 10.10.0.0 255.255.0.0 209.165.200.225 100",
                    d: "ip route 10.10.0.0 255.255.0.0 209.165.200.225 50"
                },
                correct: "c",
                explanation: "Pour créer une route statique flottante qui servira de secours à une route EIGRP, il faut configurer une route statique avec une distance administrative supérieure à celle d'EIGRP (qui est de 90). La commande 'ip route 10.10.0.0 255.255.0.0 209.165.200.225 100' crée une route statique vers le réseau 10.10.0.0/16 via l'adresse 209.165.200.225 avec une distance administrative de 100, ce qui en fait une route de secours pour la route EIGRP."
            },
            {
                id: 70,
                question: "Quelles sont les trois étapes à suivre avant de transférer un commutateur Cisco vers un nouveau domaine de gestion VTP ?",
                options: {
                    a: "Redémarrer le commutateur.",
                    b: "Télécharger la base de données VTP à partir du serveur VTP dans le nouveau domaine.",
                    c: "Configurer le commutateur avec le nom du nouveau domaine de gestion.",
                    d: "Réinitialiser les compteurs VTP pour permettre au commutateur de se synchroniser avec les autres commutateurs du domaine.",
                    e: "Sélectionner le mode et la version VTP appropriés.",
                    f: "Configurer le serveur VTP dans le domaine pour reconnaître l'ID de pont du nouveau commutateur."
                },
                correct: "a,c,e",
                explanation: "Avant de transférer un commutateur Cisco vers un nouveau domaine VTP, il faut: 1) Redémarrer le commutateur pour s'assurer qu'il n'y a pas de configurations résiduelles, 2) Configurer le commutateur avec le nom du nouveau domaine VTP, et 3) Sélectionner le mode VTP approprié (serveur, client ou transparent) et la version VTP compatible avec les autres commutateurs du domaine."
            },
            {
                id: 71,
                question: "Reportez-vous à l'illustration. Quelle opération effectue le routeur R1 sur un paquet associé à une adresse IPv6 de destination 2001:db8:cafe:5::1 ?",
                options: {
                    a: "supprimer le paquet",
                    b: "transmettre le paquet en sortie sur Serial0/0/0",
                    c: "transmettre le paquet en sortie sur GigabitEthernet0/1",
                    d: "transmettre le paquet en sortie sur GigabitEthernet0/0"
                },
                correct: "b",
                explanation: "D'après la table de routage IPv6 de R1, le paquet destiné à l'adresse 2001:db8:cafe:5::1 correspond à la route pour le préfixe 2001:db8:cafe:5::/64, qui indique que le paquet doit être transmis via l'interface Serial0/0/0. Le routeur utilise la correspondance de préfixe le plus long pour déterminer quelle route utiliser."
            },
            {
                id: 72,
                question: "Quelle est la principale raison pour un cybercriminel de lancer une attaque par dépassement d'adresses MAC ?",
                options: {
                    a: "pour que le cybercriminel puisse voir les trames destinées à d'autres hôtes",
                    b: "pour que le commutateur cesse d'acheminer le trafic",
                    c: "pour que le cybercriminel puisse exécuter un code arbitraire sur le commutateur",
                    d: "pour que les hôtes légitimes ne puissent pas obtenir une adresse MAC"
                },
                correct: "a",
                explanation: "L'objectif principal d'une attaque par dépassement d'adresses MAC (MAC flooding) est de remplir la table CAM (Content Addressable Memory) du commutateur avec de fausses entrées d'adresses MAC. Une fois la table pleine, le commutateur ne peut plus apprendre de nouvelles adresses et commence à fonctionner comme un hub, diffusant les trames à tous les ports. Cela permet à l'attaquant de voir les trames destinées à d'autres hôtes, facilitant ainsi l'espionnage du réseau."
            },
            {
                id: 73,
                question: "Quelle proposition décrit le résultat de l'interconnexion de plusieurs commutateurs Cisco LAN ?",
                options: {
                    a: "Chaque commutateur comprend un espace de diffusion et un espace de collision.",
                    b: "Les collisions de trames augmentent sur les segments connectant les commutateurs.",
                    c: "Le domaine de diffusion s'étend sur tous les commutateurs.",
                    d: "Chaque commutateur comprend un espace de collision."
                },
                correct: "c",
                explanation: "Lorsque plusieurs commutateurs Cisco LAN sont interconnectés, le domaine de diffusion s'étend sur tous les commutateurs. Cela signifie que les trames de diffusion envoyées sur un commutateur seront transmises à tous les autres commutateurs du réseau. Chaque port de commutateur crée son propre domaine de collision, mais le domaine de diffusion reste unique à moins que des routeurs ou des VLAN ne soient utilisés pour segmenter le réseau."
            },
            {
                id: 74,
                question: "Reportez-vous à l'illustration. Un administrateur réseau configure le routeur R1 pour l'attribution d'adresse IPv6. Sur la base de la configuration partielle, quel système d'attribution d'adresses IPv6 global monodiffusion l'administrateur a-t-il l'intention de mettre en œuvre ?",
                options: {
                    a: "configuration manuelle",
                    b: "SLAAC",
                    c: "avec état (stateful)",
                    d: "Sans état"
                },
                correct: "c",
                explanation: "La configuration montrée indique que l'administrateur configure DHCPv6 avec état (stateful). La présence d'un pool DHCPv6 avec une configuration de préfixe-délégation et l'absence du drapeau 'other-config-flag' suggèrent que le routeur est configuré pour attribuer des adresses IPv6 complètes aux clients, plutôt que de simplement fournir des informations supplémentaires comme dans DHCPv6 sans état."
            },
            {
                id: 75,
                question: "Examinez l'illustration. Un administrateur réseau vérifie la configuration du commutateur S1. Quel protocole a été implémenté pour regrouper plusieurs ports physiques en une liaison logique ?",
                options: {
                    a: "DTP",
                    b: "STP",
                    c: "PAgP",
                    d: "LACP"
                },
                correct: "c",
                explanation: "D'après la configuration illustrée, le protocole PAgP (Port Aggregation Protocol) a été implémenté pour regrouper plusieurs ports physiques en une liaison logique EtherChannel. PAgP est un protocole propriétaire de Cisco qui permet de négocier automatiquement la formation d'un EtherChannel entre des commutateurs compatibles."
            },
            {
                id: 76,
                question: "Une politique de sécurité de l'entreprise exige que l'adressage MAC soit enregistré de manière dynamique et ajouté à la table des adresses MAC et à la configuration en cours sur chaque commutateur. Quelle configuration de la sécurité des ports permettra de respecter cette mesure ?",
                options: {
                    a: "adresses MAC sécurisées automatiques",
                    b: "adresses MAC sécurisées dynamiques",
                    c: "adresses MAC sécurisées statiques",
                    d: "adresses MAC sécurisées fixes"
                },
                correct: "d",
                explanation: "Les adresses MAC sécurisées fixes (ou sticky) sont apprises dynamiquement mais sont ensuite ajoutées à la configuration en cours. Cette méthode permet au commutateur d'apprendre automatiquement les adresses MAC des périphériques connectés et de les enregistrer dans la configuration, ce qui les préserve même après un redémarrage du commutateur."
            },
            {
                id: 77,
                question: "Un administrateur réseau utilise la commande de configuration globale spanning-tree portfastbpduguard default pour activer la garde BPDU sur un commutateur. Cependant, BPDU guard n'est pas activé sur tous les ports d'accès. Quelle est la source du problème?",
                options: {
                    a: "PortFast n'est pas configuré sur tous les ports d'accès.",
                    b: "Les ports d'accès configurés avec la protection racine ne peuvent pas être configurés avec la garde BPDU.",
                    c: "Les ports d'accès appartiennent à différents VLAN.",
                    d: "BPDU guard doit être activé en mode de commande de configuration de l'interface."
                },
                correct: "a",
                explanation: "La commande 'spanning-tree portfastbpduguard default' active la garde BPDU uniquement sur les ports où PortFast est activé. Si BPDU guard n'est pas activé sur tous les ports d'accès, c'est probablement parce que PortFast n'est pas configuré sur ces ports. L'administrateur doit d'abord activer PortFast sur tous les ports d'accès pour que la garde BPDU soit appliquée."
            },
            {
                id: 78,
                question: "Examinez l'illustration. Un commutateur de couche 3 se charge du routage pour trois VLAN et se connecte à un routeur pour la connectivité Internet. Comment le commutateur doit-il être configuré ?",
                options: {
                    a: "(config)# interface vlan 1\n(config-if)# ip address 192.168.1.2 255.255.255.0\n(config-if)# no shutdown",
                    b: "(config)# ip routing",
                    c: "(config)# interface gigabitethernet 1/1\n(config-if)# no switchport\n(config-if)# ip address 192.168.1.2 255.255.255.252",
                    d: "(config)# interface fastethernet0/4\n(config-if)# switchport mode trunk",
                    e: "(config)# interface gigabitethernet1/1\n(config-if)# switchport mode trunk"
                },
                correct: "b,c",
                explanation: "Pour configurer un commutateur de couche 3 pour le routage inter-VLAN, deux configurations essentielles sont nécessaires: 1) Activer le routage IP avec la commande 'ip routing', et 2) Configurer l'interface qui se connecte au routeur externe comme une interface routée (non-switchport) avec une adresse IP. Cette configuration permet au commutateur de router le trafic entre les VLAN et de communiquer avec le routeur externe pour la connectivité Internet."
            },
            {
                id: 79,
                question: "Quel est l'effet de l'entrée de la commande de configuration ip dhcp snooping sur un commutateur?",
                options: {
                    a: "Activez globalement la surveillance DHCP (snooping) sur le commutateur.",
                    b: "Il active manuellement un lien de trunk.",
                    c: "Il active PortFast globalement sur un commutateur.",
                    d: "Désactivez les négociations DTP sur les ports trunking."
                },
                correct: "a",
                explanation: "La commande 'ip dhcp snooping' active globalement la fonction de surveillance DHCP sur le commutateur. Cette fonction de sécurité surveille les messages DHCP échangés entre les clients et les serveurs DHCP, et crée une base de données de liaison qui associe les adresses MAC des clients à leurs adresses IP attribuées. Cette base de données peut ensuite être utilisée par d'autres fonctions de sécurité comme Dynamic ARP Inspection."
            },
            {
                id: 80,
                question: "Un administrateur réseau est en train de configurer un WLAN. Pourquoi l'administrateur désactiverait-il la fonction de diffusion pour le SSID?",
                options: {
                    a: "pour assurer la confidentialité et l'intégrité du trafic sans fil en utilisant le chiffrement",
                    b: "pour éliminer l'analyse des SSID disponibles dans la zone",
                    c: "pour réduire le risque d'interférence par des dispositifs externes tels que les fours à micro-ondes",
                    d: "pour réduire le risque d'ajout de points d'accès non autorisés au réseau"
                },
                correct: "b",
                explanation: "La désactivation de la diffusion du SSID (Service Set Identifier) empêche le point d'accès d'annoncer activement le nom du réseau sans fil. Cela rend le réseau 'invisible' pour les utilisateurs qui effectuent une analyse standard des réseaux disponibles. Bien que ce ne soit pas une mesure de sécurité robuste (car le SSID peut toujours être découvert par d'autres moyens), cela peut aider à réduire la visibilité du réseau pour les utilisateurs occasionnels."
            },
            {
                id: 81,
                question: "Une entreprise déploie un réseau sans fil dans le site de distribution d'une banlieue de Boston. L'entrepôt est assez volumineux et nécessite l'utilisation de plusieurs points d'accès. Étant donné que certains appareils de l'entreprise fonctionnent toujours à 2,4 GHz, l'administrateur réseau décide de déployer la norme 802.11g. Quels sont les canaux que vous affecterez aux différents points d'accès afin d'éviter les chevauchements ?",
                options: {
                    a: "Canaux 2, 6 et 10",
                    b: "Canaux 1, 7 et 13",
                    c: "Canaux 1, 6 et 11",
                    d: "Canaux 1, 5 et 9"
                },
                correct: "c",
                explanation: "Dans la bande de fréquences 2,4 GHz, il existe 3 canaux non chevauchants: 1, 6 et 11. Ces canaux sont séparés par 5 canaux, ce qui est suffisant pour éviter les interférences. L'utilisation de ces trois canaux permet de déployer plusieurs points d'accès dans un même espace sans créer d'interférences entre eux, optimisant ainsi la couverture et les performances du réseau sans fil."
            },

            {
                id: 94,
                question: "Quel protocole ajoute de la sécurité aux connexions à distance ?",
                options: {
                    a: "FTP",
                    b: "HTTP",
                    c: "NetBEUI",
                    d: "POP",
                    e: "SSH"
                },
                correct: "e",
                explanation: "SSH (Secure Shell) est le protocole qui ajoute de la sécurité aux connexions à distance. Contrairement aux autres protocoles mentionnés, SSH chiffre toutes les communications entre le client et le serveur, y compris les identifiants de connexion, ce qui protège contre l'interception des données sensibles. C'est le protocole recommandé pour l'administration à distance sécurisée des équipements réseau."
            },
            {
                id: 95,
                question: "Examinez l'illustration. Un administrateur réseau vérifie la configuration du routage inter-VLAN. Les utilisateurs se plaignent que PC2 ne peut pas communiquer avec PC1. Sur la base de la sortie, quelle est la cause possible du problème ?",
                options: {
                    a: "Gi0/0 n'est pas configuré comme port de jonction.",
                    b: "L'interface de commande GigabitEthernet0/0.5 a été saisie de manière incorrecte.",
                    c: "Aucune adresse IP n'est configurée sur l'interface Gi0/0.",
                    d: "La commande no shutdown n'est pas entrée sur les sous-interfaces.",
                    e: "La commande encapsulation dot1Q 5 contient le mauvais VLAN."
                },
                correct: "e",
                explanation: "Le problème est que la commande d'encapsulation dot1Q spécifie le mauvais VLAN. Pour le routage inter-VLAN, chaque sous-interface doit être configurée avec l'encapsulation dot1Q correspondant au VLAN qu'elle dessert. Si le VLAN spécifié dans la commande d'encapsulation est incorrect, le routeur ne pourra pas traiter correctement le trafic de ce VLAN."
            },
            {
                id: 97,
                question: "Faites correspondre chaque type de message DHCP avec sa description.",
                options: {
                    a: "un client initiant un message pour trouver un serveur DHCP – DHCPDISCOVER",
                    b: "un serveur DHCP répondant à la requête initiale d'un client – DHCPOFFER",
                    c: "le client acceptant l'adresse IP fournie par le serveur DHCP – DHCPREQUEST",
                    d: "le serveur DHCP confirmant que le bail a été accepté – DHCPACK"
                },
                correct: "a,b,c,d",
                explanation: "Le processus DHCP comprend quatre messages principaux: 1) DHCPDISCOVER: le client envoie une diffusion pour trouver un serveur DHCP, 2) DHCPOFFER: le serveur DHCP répond avec une offre d'adresse IP, 3) DHCPREQUEST: le client accepte l'offre et demande formellement l'adresse IP, et 4) DHCPACK: le serveur DHCP confirme l'attribution de l'adresse IP au client."
            },
            {
                id: 98,
                question: "Quelle attaque réseau cherche à créer un DoS pour les clients en les empêchant d'obtenir un bail DHCP ?",
                options: {
                    a: "Usurpation d'adresse IP",
                    b: "Famine DHCP",
                    c: "Attaque de table CAM",
                    d: "Spoofing DHCP"
                },
                correct: "b",
                explanation: "La famine DHCP (DHCP starvation) est une attaque qui vise à épuiser toutes les adresses IP disponibles dans le pool DHCP en envoyant un grand nombre de demandes DHCP avec différentes adresses MAC falsifiées. Cela empêche les clients légitimes d'obtenir des adresses IP, créant ainsi un déni de service (DoS) sur le réseau."
            },
            {
                id: 105,
                question: "Quelle commande permettra à un routeur de commencer à envoyer des messages lui permettant de configurer une adresse lien-local sans utiliser de serveur DHCP IPv6 ?",
                options: {
                    a: "un itinéraire statique",
                    b: "la route ipv6 ::/0 commande",
                    c: "la commande ipv6 unicast-routing",
                    d: "la commande de routage ip"
                },
                correct: "c",
                explanation: "La commande 'ipv6 unicast-routing' active le routage IPv6 sur un routeur Cisco et permet au routeur de commencer à envoyer des messages Router Advertisement (RA). Ces messages permettent aux hôtes sur le réseau de configurer automatiquement leurs adresses IPv6 lien-local sans avoir besoin d'un serveur DHCP IPv6, en utilisant le processus d'auto-configuration sans état (SLAAC)."
            },
            {
                id: 119,
                question: "Les utilisateurs se plaignent d'un accès sporadique à Internet chaque après-midi. Que faut-il faire ou vérifier ?",
                options: {
                    a: "Créez des routes statiques vers tous les réseaux internes et une route par défaut vers Internet.",
                    b: "Vérifiez qu'il n'y a pas de route par défaut dans les tables de routage du routeur Edge.",
                    c: "Créez une route statique flottante vers ce réseau.",
                    d: "Vérifiez les statistiques sur la route par défaut pour la sursaturation."
                },
                correct: "d",
                explanation: "Si les utilisateurs rencontrent des problèmes d'accès à Internet de manière sporadique, particulièrement à certaines heures de la journée (comme l'après-midi), cela suggère un problème de congestion ou de sursaturation. Il est recommandé de vérifier les statistiques sur la route par défaut pour déterminer si la bande passante est saturée pendant ces périodes, ce qui pourrait expliquer les problèmes d'accès intermittents."
            },
            {
                id: 122,
                question: "Un nouveau commutateur de couche 3 est connecté à un routeur et est en cours de configuration pour le routage interVLAN. Quelles sont trois des cinq étapes requises pour la configuration ?",
                options: {
                    a: "modifier le VLAN par défaut",
                    b: "installer une route statique",
                    c: "ajustement de la métrique d'itinéraire",
                    d: "création de VLAN",
                    e: "attribution de ports aux VLAN",
                    f: "création d'interfaces SVI",
                    g: "implémenter un protocole de routage",
                    h: "activation du routage IP",
                    i: "en saisissant « pas de port de commutation » sur le port connecté au routeur",
                    j: "établissement de contiguïtés"
                },
                correct: "d,e,f,h,i",
                explanation: "Pour configurer le routage interVLAN sur un commutateur de couche 3, les étapes essentielles sont: 1) Créer les VLAN nécessaires, 2) Attribuer les ports aux VLAN appropriés, 3) Créer des interfaces SVI (Switched Virtual Interface) pour chaque VLAN, 4) Activer le routage IP avec la commande 'ip routing', et 5) Configurer l'interface connectée au routeur externe comme une interface routée avec la commande 'no switchport'."
            },
            {
                id: 132,
                question: "Les employés ne peuvent pas se connecter aux serveurs sur l'un des réseaux internes. Que faut-il faire ou vérifier ?",
                options: {
                    a: "Utilisez la commande « show ip interface brief » pour voir si une interface est en panne.",
                    b: "Vérifiez qu'il n'y a pas de route par défaut dans les tables de routage du routeur Edge.",
                    c: "Créez des routes statiques vers tous les réseaux internes et une route par défaut vers Internet.",
                    d: "Vérifiez les statistiques sur la route par défaut pour la sursaturation."
                },
                correct: "a",
                explanation: "Si les employés ne peuvent pas se connecter aux serveurs sur un réseau interne spécifique, la première étape de dépannage devrait être de vérifier l'état des interfaces du routeur avec la commande 'show ip interface brief'. Cette commande permet de voir rapidement si une interface est en panne (down) ou si elle a des problèmes de configuration, ce qui pourrait expliquer pourquoi le trafic ne peut pas atteindre le réseau des serveurs."
            },
            {
                id: 134,
                question: "Un administrateur remarque qu'un grand nombre de paquets sont supprimés sur l'un des routeurs de succursale. Que faut-il faire ou vérifier ?",
                options: {
                    a: "Créez des routes statiques vers tous les réseaux internes et une route par défaut vers Internet.",
                    b: "Créez des routes statiques supplémentaires vers le même emplacement avec un AD de 1.",
                    c: "Vérifiez les statistiques sur la route par défaut pour la sursaturation.",
                    d: "Vérifiez la table de routage pour une route statique manquante."
                },
                correct: "d",
                explanation: "Si un grand nombre de paquets sont supprimés sur un routeur de succursale, cela peut indiquer que le routeur ne sait pas comment acheminer ces paquets vers leur destination. Il est recommandé de vérifier la table de routage pour s'assurer qu'il existe des routes vers toutes les destinations nécessaires. Une route statique manquante pourrait expliquer pourquoi les paquets sont supprimés au lieu d'être acheminés correctement."
            },
            {
                id: 135,
                question: "Quelles sont les deux caractéristiques du commutateur qui pourraient aider à réduire la congestion du réseau ?",
                options: {
                    a: "commutation interne rapide",
                    b: "tampons de grande taille",
                    c: "commutation store-and-forward",
                    d: "faible densité de ports",
                    e: "contrôle de séquence de contrôle de trame (FCS)"
                },
                correct: "a,b",
                explanation: "Deux caractéristiques des commutateurs qui peuvent aider à réduire la congestion réseau sont: 1) La commutation interne rapide, qui permet de traiter les paquets plus rapidement et d'éviter les goulots d'étranglement, et 2) Les tampons de grande taille, qui permettent de stocker temporairement les paquets pendant les périodes de congestion, réduisant ainsi les pertes de paquets et améliorant les performances globales du réseau."
            },
            {
                id: 136,
                question: "Quel est le résultat de la connexion de deux ou plusieurs commutateurs ensemble ?",
                options: {
                    a: "Le nombre de domaines de diffusion est augmenté.",
                    b: "La taille du domaine de diffusion est augmentée.",
                    c: "Le nombre de domaines de collision est réduit.",
                    d: "La taille du domaine de collision est augmentée."
                },
                correct: "b",
                explanation: "Lorsque deux ou plusieurs commutateurs sont connectés ensemble, la taille du domaine de diffusion est augmentée. Un domaine de diffusion comprend tous les périphériques qui reçoivent les trames de diffusion envoyées sur le réseau. Les commutateurs transmettent les diffusions à tous leurs ports, donc connecter plusieurs commutateurs étend le domaine de diffusion à tous les périphériques connectés à ces commutateurs, à moins que des VLANs ou des routeurs ne soient utilisés pour segmenter le réseau."
            },
            {
                id: 139,
                question: "Quel est l'effet de la saisie de la commande de configuration switchport port-security sur un commutateur ?",
                options: {
                    a: "Il apprend dynamiquement l'adresse L2 et la copie dans la configuration en cours.",
                    b: "Il active la sécurité des ports sur une interface.",
                    c: "Il active la sécurité des ports globalement sur le commutateur.",
                    d: "Il restreint le nombre de messages de découverte, par seconde, à recevoir sur l'interface."
                },
                correct: "b",
                explanation: "La commande 'switchport port-security' active la fonctionnalité de sécurité des ports sur une interface spécifique du commutateur, pas globalement. Cette fonctionnalité permet de limiter quelles adresses MAC peuvent accéder au réseau via cette interface, contribuant ainsi à prévenir les accès non autorisés."
            },
            {
                id: 140,
                question: "Un administrateur réseau configure un WLAN. Pourquoi l'administrateur utiliserait-il plusieurs points d'accès légers ?",
                options: {
                    a: "pour centraliser la gestion de plusieurs WLAN",
                    b: "pour surveiller le fonctionnement du réseau sans fil",
                    c: "fournir un service prioritaire pour les applications urgentes",
                    d: "pour faciliter la configuration et la gestion de groupe de plusieurs WLAN via un WLC"
                },
                correct: "d",
                explanation: "Les points d'accès légers (lightweight access points) sont utilisés avec un contrôleur WLAN (WLC) pour faciliter la configuration et la gestion centralisée de plusieurs points d'accès sans fil. Cette architecture permet à l'administrateur de configurer et gérer tous les points d'accès depuis une interface unique, simplifiant considérablement l'administration des réseaux sans fil de taille moyenne à grande."
            },
            {
                id: 141,
                question: "Examinez l'illustration. PC-A et PC-B sont tous deux dans le VLAN 60. PC-A est incapable de communiquer avec PC-B. Quel est le problème ?",
                options: {
                    a: "Le VLAN natif doit être le VLAN 60.",
                    b: "Le VLAN natif est supprimé du lien.",
                    c: "Le tronc a été configuré avec la commande switchport nonegotiate.",
                    d: "Le VLAN utilisé par PC-A ne figure pas dans la liste des VLAN autorisés sur le tronc."
                },
                correct: "d",
                explanation: "Si PC-A et PC-B sont dans le même VLAN mais ne peuvent pas communiquer à travers un lien trunk, le problème le plus probable est que le VLAN 60 n'est pas inclus dans la liste des VLAN autorisés sur le lien trunk. Par défaut, tous les VLAN sont autorisés sur un trunk, mais cette configuration peut être modifiée avec la commande 'switchport trunk allowed vlan'. Si le VLAN 60 a été exclu de cette liste, le trafic de ce VLAN ne pourra pas traverser le lien trunk."
            },
            {
                id: 144,
                question: "Un administrateur réseau a configuré un routeur pour un fonctionnement DHCPv6 sans état. Cependant, les utilisateurs signalent que les postes de travail ne reçoivent pas les informations du serveur DNS. Quelles lignes de configuration de routeur doivent être vérifiées pour s'assurer que le service DHCPv6 sans état est correctement configuré ?",
                options: {
                    a: "La ligne de nom de domaine est incluse dans la section ipv6 dhcp pool.",
                    b: "La ligne DNS-server est incluse dans la section ipv6 dhcp pool.",
                    c: "Le ipv6 nd other-config-flag est saisi pour l'interface qui fait face au segment LAN.",
                    d: "La ligne de préfixe d'adresse est incluse dans la section ipv6 dhcp pool.",
                    e: "Le ipv6 et managed-config-flag est saisi pour l'interface qui fait face au segment LAN."
                },
                correct: "b,c",
                explanation: "Pour que DHCPv6 sans état fonctionne correctement et fournisse les informations DNS aux clients, deux configurations sont essentielles: 1) La ligne 'dns-server' doit être incluse dans la section 'ipv6 dhcp pool' pour spécifier l'adresse du serveur DNS, et 2) Le drapeau 'other-config-flag' doit être activé sur l'interface face au LAN avec la commande 'ipv6 nd other-config-flag'. Ce drapeau indique aux clients qu'ils doivent utiliser DHCPv6 pour obtenir des informations supplémentaires comme les serveurs DNS, mais pas pour les adresses IP."
            },
            {
                id: 147,
                question: "Quelle action a lieu lorsqu'une trame entrant dans un commutateur a une adresse MAC de destination de monodiffusion qui ne figure pas dans la table d'adresses MAC ?",
                options: {
                    a: "Le commutateur met à jour la minuterie d'actualisation de l'entrée.",
                    b: "Le commutateur réinitialise la minuterie d'actualisation sur toutes les entrées de la table d'adresses MAC.",
                    c: "Le commutateur remplace l'ancienne entrée et utilise le port le plus récent.",
                    d: "Le commutateur transférera la trame vers tous les ports à l'exception du port entrant."
                },
                correct: "d",
                explanation: "Lorsqu'un commutateur reçoit une trame avec une adresse MAC de destination qui n'est pas dans sa table d'adresses MAC, il procède à une inondation (flooding) de la trame. Cela signifie qu'il transmet la trame à tous les ports actifs, à l'exception du port d'entrée. Ce comportement permet à la trame d'atteindre sa destination, même si le commutateur ne connaît pas encore l'emplacement du périphérique destinataire."
            },
            {
                id: 150,
                question: "Quel protocole ou quelle technologie gère les négociations de jonction entre les commutateurs ?",
                options: {
                    a: "VTP",
                    b: "EtherChannel",
                    c: "DTP",
                    d: "STP"
                },
                correct: "c",
                explanation: "Le protocole DTP (Dynamic Trunking Protocol) est responsable de la négociation automatique des liens trunk entre les commutateurs Cisco. Il permet aux commutateurs de déterminer si un port doit fonctionner en mode trunk ou en mode accès, en fonction de la configuration des deux extrémités du lien."
            },
            {
                id: 154,
                question: "Quel est l'effet de la saisie de la commande de configuration ip dhcp snooping limit rate 6 sur un commutateur ?",
                options: {
                    a: "Il affiche les associations d'adresses IP-MAC pour les interfaces de commutateur.",
                    b: "Il active la sécurité des ports globalement sur le commutateur.",
                    c: "Il restreint le nombre de messages de découverte, par seconde, à recevoir sur l'interface.",
                    d: "Il apprend dynamiquement l'adresse L2 et la copie dans la configuration en cours."
                },
                correct: "c",
                explanation: "La commande 'ip dhcp snooping limit rate 6' limite le nombre de messages DHCP que le commutateur acceptera par seconde sur une interface à 6. Cette limitation aide à prévenir les attaques de type DHCP starvation, où un attaquant tente d'épuiser le pool d'adresses DHCP en envoyant un grand nombre de demandes DHCP avec différentes adresses MAC falsifiées."
            },
            {
                id: 156,
                question: "Quel est l'effet de la saisie de la commande de configuration ip arp inspection validate src-mac sur un commutateur ?",
                options: {
                    a: "Il vérifie l'adresse L2 source dans l'en-tête Ethernet par rapport à l'adresse L2 de l'expéditeur dans le corps ARP.",
                    b: "Cela désactive tous les ports de jonction.",
                    c: "Il affiche les associations d'adresses IP-MAC pour les interfaces de commutateur.",
                    d: "Il active le portfast sur une interface de commutateur spécifique."
                },
                correct: "a",
                explanation: "La commande 'ip arp inspection validate src-mac' configure le commutateur pour vérifier que l'adresse MAC source dans l'en-tête Ethernet correspond à l'adresse MAC de l'expéditeur dans le corps du paquet ARP. Cette validation aide à prévenir les attaques d'empoisonnement ARP en s'assurant que les paquets ARP contiennent des informations cohérentes et légitimes."
            },
            {
                id: 83,
                question: "Les utilisateurs d'un réseau local ne peuvent pas accéder à un serveur Web d'entreprise mais peuvent se rendre ailleurs. Que faut-il faire ou vérifier?",
                options: {
                    a: "Vérifiez que la route statique vers le serveur est présente dans la table de routage.",
                    b: "Créez un itinéraire statique flottant vers ce réseau.",
                    c: "Assurez-vous que l'ancien itinéraire par défaut a été supprimé des routeurs de bord de l'entreprise.",
                    d: "Vérifiez la configuration sur l'itinéraire statique flottant et ajustez l'AD."
                },
                correct: "a",
                explanation: "Si les utilisateurs peuvent accéder à Internet mais pas à un serveur Web spécifique de l'entreprise, il est probable qu'il manque une route vers ce serveur dans la table de routage. La première étape de dépannage consiste à vérifier si une route statique vers le réseau du serveur est présente et correctement configurée dans la table de routage du routeur."
            },
            {
                id: 84,
                question: "Quelle commande permet de lancer le processus de regroupement de deux interfaces physiques afin de créer un groupe EtherChannel par le biais du protocole LACP ?",
                options: {
                    a: "channel-group 1 mode desirable",
                    b: "interface range GigabitEthernet 0/4 – 5",
                    c: "channel-group 2 mode auto",
                    d: "interface port-channel 2"
                },
                correct: "b",
                explanation: "Pour spécifier les interfaces dans un groupe EtherChannel, utilisez la commande de configuration globale 'interface range' suivie de la plage d'interfaces à utiliser. La commande 'interface range GigabitEthernet 0/4 – 5' est l'option correcte, car elle spécifie deux interfaces pour le groupe EtherChannel. Après cette commande, il faudrait configurer le channel-group avec le mode LACP approprié."
            },
            {
                id: 85,
                question: "Quelle instruction est correcte sur la façon dont un commutateur de couche 2 détermine comment transférer des trames?",
                options: {
                    a: "Les décisions de transfert de trame sont basées sur l'adresse MAC et les mappages des ports dans la table CAM.",
                    b: "Le transfert de trame cut-through garantit que les trames non valides sont toujours abandonnées.",
                    c: "Les trames monodiffusion sont toujours transmises indépendamment de l'adresse MAC de destination.",
                    d: "Seules les trames avec des adresses de destination de diffusion sont transmises à tous les ports de commutateurs actifs."
                },
                correct: "a",
                explanation: "Un commutateur de couche 2 prend ses décisions de transfert de trames en se basant sur l'adresse MAC de destination et les mappages des ports dans sa table CAM (Content Addressable Memory). Lorsqu'une trame arrive, le commutateur consulte sa table CAM pour déterminer par quel port il doit transmettre la trame en fonction de l'adresse MAC de destination."
            },
            {
                id: 86,
                question: "Reportez-vous à l'illustration. Quels sont les trois hôtes qui recevront des requêtes ARP de l'hôte A, dans l'hypothèse où le port Fa0/4 sur les deux commutateurs est configuré pour transporter du trafic pour plusieurs VLAN ?",
                options: {
                    a: "hôte D",
                    b: "hôte C",
                    c: "hôte F",
                    d: "hôte G",
                    e: "hôte B",
                    f: "hôte E"
                },
                correct: "a,b,c",
                explanation: "Les requêtes ARP sont envoyées sous forme de diffusions et restent confinées dans le VLAN de l'expéditeur. Si l'hôte A est dans le VLAN 1, ses requêtes ARP seront reçues par tous les hôtes du VLAN 1, qui sont probablement les hôtes C, D et F. Les hôtes dans d'autres VLAN (comme B, E et G) ne recevront pas ces diffusions ARP, même si les commutateurs sont connectés par un lien trunk."
            },
            {
                id: 87,
                question: "Parmi les propositions suivantes, lesquelles caractérisent les ports routés d'un commutateur multicouche ?",
                options: {
                    a: "Ils sont utilisés pour les liaisons point à multipoint.",
                    b: "Dans un réseau commuté, elles sont principalement configurées entre les commutateurs, sur les couches principale et de distribution.",
                    c: "Ils ne sont associés à aucun VLAN particulier.",
                    d: "La commande interface vlan <numéro du VLAN> doit être exécutée pour créer un VLAN sur les ports routés.",
                    e: "Ils prennent en charge les sous-interfaces, notamment les interfaces sur les routeurs Cisco IOS."
                },
                correct: "c",
                explanation: "Les ports routés d'un commutateur multicouche ne sont associés à aucun VLAN particulier. Contrairement aux ports de commutation qui fonctionnent au niveau de la couche 2 et sont associés à un VLAN, les ports routés fonctionnent au niveau de la couche 3 et se comportent comme des interfaces de routeur traditionnelles, avec leur propre adresse IP."
            },
            {
                id: 88,
                question: "Quel protocole ou technologie définit un groupe de routeurs, l'un d'eux défini comme actif et l'autre comme veille?",
                options: {
                    a: "EtherChannel",
                    b: "DTP",
                    c: "HSRP",
                    d: "Protocole VTP"
                },
                correct: "c",
                explanation: "HSRP (Hot Standby Router Protocol) est un protocole de redondance qui définit un groupe de routeurs, avec un routeur désigné comme actif et un ou plusieurs autres comme routeurs de secours. Le routeur actif traite le trafic, tandis que les routeurs de secours surveillent l'état du routeur actif et prennent le relais si celui-ci tombe en panne, assurant ainsi une haute disponibilité de la passerelle par défaut."
            },
            {
                id: 89,
                question: "Un administrateur réseau prépare l'implémentation du protocole Rapid PVST+ sur un réseau de production. Comment les types de liaisons Rapid PVST+ sont-ils déterminés sur les interfaces de commutateur ?",
                options: {
                    a: "Les types de liaisons sont déterminés automatiquement.",
                    b: "Les types de liaisons peuvent uniquement être déterminés si PortFast a été configuré.",
                    c: "Les types de liaisons peuvent uniquement être configurés sur des ports d'accès configurés au moyen d'un VLAN unique.",
                    d: "Les types de liaisons doivent être configurés avec des commandes de configuration de port spécifiques."
                },
                correct: "a",
                explanation: "Dans Rapid PVST+, les types de liaisons (point à point, partagés ou de bord) sont déterminés automatiquement par le protocole en fonction de la configuration duplex de l'interface. Les liaisons en duplex intégral sont considérées comme des liaisons point à point, tandis que les liaisons en semi-duplex sont considérées comme des liaisons partagées. Bien que ces types puissent être configurés manuellement, ils sont par défaut déterminés automatiquement."
            },
            {
                id: 90,
                question: "Sur quels ports de commutation devrait-on activer la protection BPDU pour améliorer la stabilité STP?",
                options: {
                    a: "tous les ports équipés de PortFast",
                    b: "tous les ports de trunk qui ne sont pas des ports racines",
                    c: "seuls les ports qui s'attachent à un commutateur voisin",
                    d: "uniquement les ports qui sont élus comme ports désignés"
                },
                correct: "a",
                explanation: "La protection BPDU (BPDU Guard) devrait être activée sur tous les ports équipés de PortFast. PortFast est généralement activé sur les ports connectés aux périphériques d'extrémité comme les PC, où aucun BPDU ne devrait être reçu. Si un BPDU est reçu sur un port avec BPDU Guard activé, le port est immédiatement désactivé, ce qui empêche les boucles potentielles et améliore la stabilité du protocole Spanning Tree."
            },
            {
                id: 91,
                question: "Examinez l'illustration. Un administrateur réseau configure un routeur comme serveur DHCPv6. L'administrateur exécute une commande show ipv6 dhcp pool pour vérifier la configuration. Parmi les propositions suivantes, laquelle décrit la raison pour laquelle le nombre de clients actifs est 0 ?",
                options: {
                    a: "Aucune plage d'adresses IPv6 n'est spécifiée pour la configuration du pool DHCP IPv6.",
                    b: "Aucun client n'a encore communiqué avec le serveur DHCPv6.",
                    c: "L'état n'est pas maintenu par le serveur DHCPv6 en mode de fonctionnement DHCPv6 sans état.",
                    d: "L'adresse de la passerelle par défaut n'est pas disponible dans le pool."
                },
                correct: "c",
                explanation: "En mode DHCPv6 sans état (stateless), le serveur ne maintient pas d'état des clients qui ont reçu des informations de configuration. Contrairement au mode avec état (stateful) où le serveur garde une trace des adresses attribuées, le mode sans état fournit uniquement des informations supplémentaires comme les serveurs DNS, mais les adresses IP sont obtenues par auto-configuration (SLAAC). C'est pourquoi le nombre de clients actifs est affiché comme 0."
            },
            {
                id: 92,
                question: "Un administrateur réseau a trouvé un utilisateur envoyant une trame 802.1Q à un commutateur. Quelle est la meilleure solution pour prévenir ce type d'attaque?",
                options: {
                    a: "Les VLAN des ports d'accès utilisateur doivent être différents des VLAN natifs utilisés sur les ports de jonction.",
                    b: "Le numéro de VLAN natif utilisé sur n'importe quel tronc doit être l'un des VLAN de données actifs.",
                    c: "Les ports de trunk doivent être configurés avec la sécurité de port.",
                    d: "Les ports de trunk doivent utiliser le VLAN par défaut comme numéro de VLAN natif."
                },
                correct: "a",
                explanation: "Pour prévenir les attaques de double balisage VLAN (VLAN hopping), il est recommandé d'utiliser des VLAN différents pour les ports d'accès utilisateur et pour le VLAN natif des ports de jonction. Cela empêche un attaquant d'envoyer des trames avec une balise VLAN qui, une fois la balise native retirée sur un lien trunk, se retrouveraient avec une autre balise VLAN valide, permettant ainsi d'accéder à un VLAN normalement inaccessible."
            },
            {
                id: 93,
                question: "Un nouveau commutateur doit être ajouté à un réseau existant dans un bureau distant. L'administrateur réseau ne souhaite pas que les techniciens du bureau distant puissent ajouter de nouveaux VLAN au commutateur, mais le commutateur doit recevoir des mises à jour VLAN du domaine VTP. Quelles deux étapes doivent être effectuées pour configurer VTP sur le nouveau commutateur afin de répondre à ces conditions?",
                options: {
                    a: "Configurer le nouveau commutateur en tant que client VTP.",
                    b: "Activer l'élagage VTP.",
                    c: "Configurer une adresse IP sur le nouveau commutateur.",
                    d: "Configurer tous les ports du nouveau commutateur en mode d'accès",
                    e: "Configurer le nom de domaine et le mot de passe VTP corrects sur le nouveau commutateur"
                },
                correct: "a,e",
                explanation: "Pour que le commutateur reçoive des mises à jour VLAN du domaine VTP sans permettre aux techniciens locaux d'ajouter de nouveaux VLAN, deux étapes sont nécessaires: 1) Configurer le commutateur en mode client VTP, ce qui lui permet de recevoir et d'appliquer les mises à jour VLAN mais pas d'en créer, et 2) Configurer le nom de domaine et le mot de passe VTP corrects pour qu'il puisse communiquer avec les autres commutateurs du domaine VTP."
            },

            {
                id: 95,
                question: "Quelle attaque réseau est atténuée en activant la garde BPDU ?",
                options: {
                    a: "attaque par débordement de la table CAM",
                    b: "serveurs DHCP non fiables sur un réseau",
                    c: "commutateurs non fiables sur un réseau",
                    d: "Usurpation d'adresse MAC"
                },
                correct: "c",
                explanation: "La garde BPDU (BPDU Guard) est une fonctionnalité de sécurité qui protège contre les commutateurs non fiables ou non autorisés connectés au réseau. Lorsqu'un port avec BPDU Guard activé reçoit un BPDU (Bridge Protocol Data Unit), il est immédiatement désactivé. Cela empêche les utilisateurs de connecter leurs propres commutateurs au réseau, ce qui pourrait perturber la topologie STP et créer des boucles."
            },
            {
                id: 96,
                question: "Quel est le terme commun donné aux messages de journal SNMP générés par les périphériques réseau et envoyés au serveur SNMP?",
                options: {
                    a: "L'accusé de réception",
                    b: "Audit",
                    c: "Déroutements",
                    d: "avertissements"
                },
                correct: "c",
                explanation: "Les 'déroutements' (traps) sont des messages de notification asynchrones envoyés par les périphériques réseau au serveur de gestion SNMP (Simple Network Management Protocol) lorsque certains événements se produisent. Ces messages permettent au serveur d'être informé des changements d'état, des alertes ou des problèmes sur les périphériques sans avoir à les interroger constamment."
            },


            {
                id: 99,
                question: "Un technicien junior ajoutait une route à un routeur LAN. Un traceroute vers un périphérique sur le nouveau réseau a révélé un mauvais chemin et un état inaccessible. Que faut-il faire ou vérifier?",
                options: {
                    a: "Vérifiez que la route statique vers le serveur est présente dans la table de routage.",
                    b: "Vérifiez la configuration sur la route statique flottante et ajustez l'AD.",
                    c: "Vérifiez la configuration de l'interface de sortie sur la nouvelle route statique.",
                    d: "Créez une route statique flottante vers ce réseau."
                },
                correct: "c",
                explanation: "Si un traceroute montre un mauvais chemin et un état inaccessible après l'ajout d'une nouvelle route, il est probable que l'interface de sortie spécifiée dans la route statique soit incorrecte ou que l'adresse du prochain saut soit mal configurée. Il faut vérifier que l'interface de sortie est correcte, opérationnelle et que l'adresse du prochain saut est accessible."
            },
            {
                id: 100,
                question: "Quels énoncés décrivent précisément les paramètres de mode bidirectionnel et de débit des commutateurs Cisco 2960 ?",
                options: {
                    a: "Les paramètres de mode bidirectionnel et de débit de chaque port du commutateur peuvent être configurés manuellement.",
                    b: "Par défaut, la fonction de négociation automatique est désactivée.",
                    c: "Si la vitesse est définie sur 1 000 Mbits/s, les ports de commutateur fonctionnent en mode bidirectionnel simultané.",
                    d: "Par défaut, le débit est défini sur 100 Mbits/s et le mode bidirectionnel est réglé sur le mode de négociation automatique.",
                    e: "L'activation de la négociation automatique sur un concentrateur prévient les erreurs de correspondance des débits des ports lors de la connexion du concentrateur au commutateur.",
                    f: "La défaillance de la négociation automatique peut être à l'origine de problèmes de connectivité."
                },
                correct: "a,c,f",
                explanation: "Concernant les commutateurs Cisco 2960: 1) Les paramètres de mode bidirectionnel et de débit peuvent être configurés manuellement sur chaque port, 2) À 1000 Mbits/s, les ports fonctionnent obligatoirement en duplex intégral (il n'existe pas de mode semi-duplex à cette vitesse), et 3) Les problèmes de négociation automatique peuvent effectivement causer des problèmes de connectivité, notamment des erreurs de non-correspondance duplex."
            },
            {
                id: 101,
                question: "Reportez-vous à l'illustration. Quelle instruction indiquée dans le résultat permet au routeur R1 de répondre aux demandes DHCPv6 sans état ?",
                options: {
                    a: "prefix-delegation 2001:DB8:8::/48 00030001000E84244E70",
                    b: "ipv6 unicast-routing",
                    c: "dns-server 2001:DB8:8::8",
                    d: "ipv6 nd other-config-flag",
                    e: "ipv6 dhcp server LAN1"
                },
                correct: "d",
                explanation: "La commande 'ipv6 nd other-config-flag' configure le routeur pour qu'il annonce aux clients IPv6 qu'ils doivent utiliser DHCPv6 sans état pour obtenir des informations de configuration supplémentaires (comme les serveurs DNS), mais pas pour obtenir leurs adresses IPv6. C'est cette commande qui permet au routeur de répondre aux demandes DHCPv6 sans état des clients."
            },
            {
                id: 102,
                question: "Quelle action se déroule lorsqu'une trame entrant dans un commutateur a une adresse MAC de destination multidiffusion?",
                options: {
                    a: "Le commutateur transmet le cadre hors du port spécifié.",
                    b: "Le commutateur ajoute un mappage d'entrée de table d'adresses MAC pour l'adresse MAC de destination et le port d'entrée.",
                    c: "Le commutateur remplace l'ancienne entrée et utilise le port le plus courant.",
                    d: "Le commutateur transmet la trame à tous les ports, sauf au port d'arrivée."
                },
                correct: "d",
                explanation: "Lorsqu'un commutateur reçoit une trame avec une adresse MAC de destination multicast, il la traite comme une diffusion et la transmet à tous les ports du même VLAN, à l'exception du port d'entrée. Contrairement aux adresses MAC unicast qui sont apprises et stockées dans la table d'adresses MAC, les adresses multicast ne sont pas enregistrées dans cette table."
            },
            {
                id: 103,
                question: "Quel protocole ou technologie permet à des données de transmettre via des liaisons de commutation redondantes?",
                options: {
                    a: "EtherChannel",
                    b: "Protocole VTP",
                    c: "DTP",
                    d: "STP"
                },
                correct: "d",
                explanation: "STP (Spanning Tree Protocol) permet la transmission de données via des liaisons de commutation redondantes en éliminant les boucles de couche 2 tout en maintenant la redondance. Il désactive certains chemins redondants pour créer une topologie sans boucle, mais peut réactiver ces chemins si le chemin principal tombe en panne, assurant ainsi la continuité de la transmission des données."
            },
            {
                id: 104,
                question: "Un administrateur réseau est en train de configurer un WLAN. Pourquoi l'administrateur modifie-t-il les adresses DHCP IPv4 par défaut sur un point d'accès?",
                options: {
                    a: "pour réduire le risque d'interférence par des dispositifs externes tels que les fours à micro-ondes",
                    b: "pour restreindre l'accès au WLAN uniquement par les utilisateurs autorisés et authentifiés",
                    c: "pour réduire l'interception de données ou l'accès au réseau sans fil à l'aide d'une plage d'adresses bien connue",
                    d: "pour surveiller le fonctionnement du réseau sans fil"
                },
                correct: "c",
                explanation: "La modification des adresses DHCP IPv4 par défaut sur un point d'accès est une mesure de sécurité qui vise à réduire le risque d'interception de données ou d'accès non autorisé au réseau. Les plages d'adresses par défaut sont bien connues des attaquants, qui peuvent les utiliser pour tenter d'accéder au réseau. En utilisant une plage d'adresses personnalisée, l'administrateur rend plus difficile pour un attaquant de deviner les adresses IP utilisées sur le réseau."
            },
            {
                id: 105,
                question: "Un administrateur réseau configure la fonction de sécurité des ports sur un commutateur. La politique de sécurité indique qu'au maximum deux adresses MAC sont autorisées sur chaque port d'accès. Lorsque le nombre maximal d'adresses MAC est atteint, une trame avec l'adresse MAC source inconnue est abandonnée et une notification est envoyée au serveur Syslog. Quel mode de violation de sécurité doit être configuré sur chaque port d'accès ?",
                options: {
                    a: "warning",
                    b: "protect",
                    c: "shutdown",
                    d: "restrict"
                },
                correct: "d",
                explanation: "Le mode de violation 'restrict' est celui qui correspond aux exigences décrites. En mode restrict, lorsque le nombre maximal d'adresses MAC est atteint, les trames avec des adresses MAC source inconnues sont abandonnées, un compteur de violations est incrémenté, et des notifications SNMP sont envoyées au serveur Syslog. Contrairement au mode 'shutdown' qui désactive le port, et au mode 'protect' qui abandonne silencieusement les trames sans notification."
            },
            {
                id: 106,
                question: "Un administrateur réseau a configuré un routeur pour une opération DHCPv6 sans état. Toutefois, les utilisateurs signalent que les stations de travail ne reçoivent pas d'informations sur le serveur DNS. Quelles sont les deux lignes de configuration du routeur qui doivent être vérifiées pour s'assurer que le service DHCPv6 sans état est correctement configuré?",
                options: {
                    a: "La ligne de nom de domaine est incluse dans la section du pool dhcp ipv6.",
                    b: "Le ipv6 nd other-config-flag entré pour l'interface qui fait face au segment LAN.",
                    c: "La ligne dns-server est incluse dans la section ipv6 dhcp pool.",
                    d: "La ligne de préfixe d'adresse est incluse dans la section ipv6 dhcp pool.",
                    e: "Le ipv6 nd managed-config-flag est entré pour l'interface qui fait face au segment LAN."
                },
                correct: "b,c",
                explanation: "Pour que DHCPv6 sans état fonctionne correctement et fournisse des informations DNS aux clients, deux configurations sont essentielles: 1) La commande 'ipv6 nd other-config-flag' doit être configurée sur l'interface face au LAN pour indiquer aux clients d'utiliser DHCPv6 sans état pour obtenir des informations supplémentaires, et 2) La ligne 'dns-server' doit être incluse dans la section 'ipv6 dhcp pool' pour spécifier l'adresse du serveur DNS à communiquer aux clients."
            },
            {
                id: 107,
                question: "Quel protocole ou quelle technologie désactive les chemins redondants pour éliminer les boucles de la couche 2 ?",
                options: {
                    a: "EtherChannel",
                    b: "Protocole VTP",
                    c: "STP",
                    d: "DTP"
                },
                correct: "c",
                explanation: "STP (Spanning Tree Protocol) est le protocole qui désactive les chemins redondants pour éliminer les boucles de couche 2 dans un réseau commuté. Il calcule un arbre couvrant qui inclut tous les commutateurs du réseau, puis bloque certains ports pour empêcher les boucles tout en maintenant la connectivité entre tous les segments du réseau."
            },
            {
                id: 108,
                question: "Un administrateur réseau est en train de configurer un WLAN. Pourquoi l'administrateur utiliserait-il des serveurs RADIUS sur le réseau?",
                options: {
                    a: "pour restreindre l'accès au WLAN uniquement par les utilisateurs autorisés et authentifiés",
                    b: "pour faciliter la configuration de groupe et la gestion de plusieurs WLAN via un WLC",
                    c: "pour centraliser la gestion de plusieurs réseaux WLAN",
                    d: "pour surveiller le fonctionnement du réseau sans fil"
                },
                correct: "a",
                explanation: "Les serveurs RADIUS (Remote Authentication Dial-In User Service) sont utilisés dans un réseau WLAN pour fournir une authentification centralisée, une autorisation et une comptabilité (AAA) pour les utilisateurs. Ils permettent de restreindre l'accès au WLAN uniquement aux utilisateurs autorisés et authentifiés en vérifiant leurs identifiants avant de leur accorder l'accès au réseau."
            },
            {
                id: 109,
                question: "Quel est l'effet de l'entrée de la commande de configuration show ip dhcp snooping binding sur un commutateur?",
                options: {
                    a: "Il limite le nombre de messages de découverte, par seconde, à recevoir sur l'interface.",
                    b: "Il passe un port de jonction en mode d'accès.",
                    c: "Il vérifie l'adresse MAC de source dans l'en-tête Ethernet par rapport à l'adresse MAC de l'expéditeur dans le corps ARP.",
                    d: "Il affiche les associations d'adresses IP à Mac pour les interfaces de commutation."
                },
                correct: "d",
                explanation: "La commande 'show ip dhcp snooping binding' est une commande d'affichage qui montre la base de données de liaison DHCP snooping. Cette base de données contient les associations entre adresses IP, adresses MAC, VLAN et interfaces pour les clients qui ont obtenu des baux DHCP. Cette information est utilisée par d'autres fonctionnalités de sécurité comme Dynamic ARP Inspection."
            },
            {
                id: 110,
                question: "Quel est l'effet de la saisie de la commande de configuration spanning-tree portfast sur un commutateur ?",
                options: {
                    a: "Cela désactive un port inutilisé.",
                    b: "Cela désactive tous les ports de jonction.",
                    c: "Il active le portfast sur une interface de commutateur spécifique.",
                    d: "Il vérifie l'adresse L2 source dans l'en-tête Ethernet par rapport à l'adresse L2 de l'expéditeur dans le corps ARP."
                },
                correct: "c",
                explanation: "La commande 'spanning-tree portfast' active la fonctionnalité PortFast sur une interface de commutateur spécifique. PortFast permet à un port d'accès de passer directement à l'état de transfert sans passer par les états d'écoute et d'apprentissage du protocole Spanning Tree, ce qui réduit considérablement le temps nécessaire pour que le port devienne opérationnel après une liaison."
            },
            {
                id: 111,
                question: "Quel est le préfixe IPv6 utilisé pour les adresses lien-local ?",
                options: {
                    a: "FF01::/8",
                    b: "2001::/3",
                    c: "FC00::/7",
                    d: "FE80::/10"
                },
                correct: "d",
                explanation: "Le préfixe FE80::/10 est réservé pour les adresses IPv6 lien-local. Ces adresses sont automatiquement configurées sur les interfaces IPv6 et sont utilisées pour la communication entre des nœuds sur le même segment de réseau (lien). Elles ne sont pas routables au-delà de ce lien et sont essentielles pour des fonctions comme la découverte de voisins."
            },
            {
                id: 112,
                question: "Quelles sont les deux fonctions exécutées par un WLC lors de l'utilisation du contrôle d'accès aux médias (MAC) ?",
                options: {
                    a: "accusés de réception et retransmissions de paquets",
                    b: "Mise en file d'attente des trames et priorisation des paquets",
                    c: "balises et réponses des sondes",
                    d: "traduction du cadre vers d'autres protocoles",
                    e: "association et réassociation de clients itinérants"
                },
                correct: "d,e",
                explanation: "Dans une architecture WLAN centralisée, le WLC (Wireless LAN Controller) prend en charge plusieurs fonctions MAC, notamment: 1) La traduction de trames entre différents protocoles pour permettre la communication entre les clients sans fil et le réseau filaire, et 2) La gestion des associations et réassociations des clients itinérants, ce qui permet une mobilité transparente des clients entre différents points d'accès."
            },
            {
                id: 113,
                question: "Un administrateur réseau configure un nouveau commutateur Cisco pour l'accès à la gestion à distance. Quels sont les trois éléments à configurer sur le commutateur pour la tâche ?",
                options: {
                    a: "Adresse IP",
                    b: "Domaine VTP",
                    c: "lignes vty",
                    d: "VLAN par défaut",
                    e: "passerelle par défaut",
                    f: "adresse de bouclage"
                },
                correct: "a,c,e",
                explanation: "Pour configurer un commutateur Cisco pour l'accès à la gestion à distance, trois éléments essentiels sont nécessaires: 1) Une adresse IP sur une interface VLAN pour permettre la connectivité IP, 2) La configuration des lignes vty pour permettre les connexions Telnet ou SSH, et 3) Une passerelle par défaut pour permettre au commutateur de communiquer avec des périphériques sur d'autres réseaux."
            },
            {
                id: 114,
                question: "Une entreprise vient de passer à un nouveau FAI. Le FAI a terminé et vérifié la connexion de son site à l'entreprise. Cependant, les employés de l'entreprise ne peuvent pas accéder à Internet. Que faut-il faire ou vérifier ?",
                options: {
                    a: "Vérifiez que la route statique vers le serveur est présente dans la table de routage.",
                    b: "Vérifiez la configuration sur la route statique flottante et ajustez l'AD.",
                    c: "Assurez-vous que l'ancienne route par défaut a été supprimée des routeurs périphériques de l'entreprise.",
                    d: "Créez une route statique flottante vers ce réseau."
                },
                correct: "c",
                explanation: "Lorsqu'une entreprise change de FAI, il est essentiel de s'assurer que l'ancienne route par défaut a été supprimée des routeurs périphériques et remplacée par une route pointant vers le nouveau FAI. Si l'ancienne route par défaut est toujours présente, le trafic continuera d'être dirigé vers l'ancien FAI, ce qui empêchera l'accès à Internet via la nouvelle connexion."
            },
            {
                id: 115,
                question: "Un technicien configure un routeur pour une petite entreprise avec plusieurs WLAN et n'a pas besoin de la complexité d'un protocole de routage dynamique. Qu'est-ce que doit être fait ou vérifié ?",
                options: {
                    a: "Vérifiez qu'il n'y a pas de route par défaut dans les tables de routage du routeur Edge.",
                    b: "Créez des routes statiques vers tous les réseaux internes et une route par défaut vers Internet.",
                    c: "Créez des routes statiques supplémentaires vers le même emplacement avec un AD de 1.",
                    d: "Vérifiez les statistiques sur la route par défaut pour la sursaturation."
                },
                correct: "b",
                explanation: "Pour une petite entreprise avec plusieurs WLAN qui ne nécessite pas la complexité d'un protocole de routage dynamique, la meilleure approche est de configurer des routes statiques vers tous les réseaux internes et une route par défaut vers Internet. Cette configuration simple est facile à maintenir et fournit un routage efficace pour les petits réseaux."
            },
            {
                id: 116,
                question: "Quel plan d'atténuation est le meilleur pour contrecarrer une attaque DoS qui crée un débordement de table d'adresses MAC ?",
                options: {
                    a: "Désactiver la DTP.",
                    b: "Désactiver STP.",
                    c: "Activer la sécurité des ports.",
                    d: "Placez les ports inutilisés dans un VLAN inutilisé."
                },
                correct: "c",
                explanation: "La sécurité des ports est la meilleure solution pour contrer une attaque DoS par débordement de table d'adresses MAC. Cette fonctionnalité limite le nombre d'adresses MAC autorisées sur un port et peut désactiver le port ou simplement bloquer les adresses MAC inconnues lorsque la limite est atteinte. Cela empêche un attaquant d'inonder la table CAM avec de fausses adresses MAC."
            },
            {
                id: 117,
                question: "Quel message DHCPv4 un client enverra-t-il pour accepter une adresse IPv4 proposée par un serveur DHCP ?",
                options: {
                    a: "diffusion DHCPACK",
                    b: "diffusion DHCPREQUEST",
                    c: "DHCPACK monodiffusion",
                    d: "DHCPREQUEST en monodiffusion"
                },
                correct: "b",
                explanation: "Lorsqu'un client DHCP reçoit une offre d'adresse IP (DHCPOFFER) d'un serveur DHCP, il envoie un message DHCPREQUEST en diffusion pour accepter cette offre. Ce message est envoyé en diffusion pour informer tous les serveurs DHCP potentiels que le client a choisi une offre spécifique, permettant aux autres serveurs de libérer les adresses qu'ils avaient réservées pour ce client."
            },
            {
                id: 118,
                question: "Faites correspondre le but avec son type de message DHCP.",
                options: {
                    a: "DHCPDISCOVER: un message utilisé pour localiser tout serveur DHCP disponible sur un réseau",
                    b: "DHCPREQUEST: un message utilisé pour identifier le serveur explicite et l'offre de bail à accepter",
                    c: "DHCPACK: un message utilisé pour confirmer que le bail est réussi",
                    d: "DHCPOFFER: un message utilisé pour suggérer un bail à un client"
                },
                correct: "a,b,c,d",
                explanation: "Les quatre principaux types de messages DHCP et leurs objectifs sont: 1) DHCPDISCOVER: envoyé par le client pour localiser les serveurs DHCP disponibles, 2) DHCPOFFER: envoyé par le serveur pour proposer une adresse IP au client, 3) DHCPREQUEST: envoyé par le client pour accepter l'offre d'un serveur spécifique, et 4) DHCPACK: envoyé par le serveur pour confirmer l'attribution du bail."
            },
            {
                id: 119,
                question: "Quel protocole ajoute de la sécurité aux connexions à distance ?",
                options: {
                    a: "FTP",
                    b: "HTTP",
                    c: "NetBEUI",
                    d: "POP",
                    e: "SSH"
                },
                correct: "e",
                explanation: "SSH (Secure Shell) est un protocole qui ajoute de la sécurité aux connexions à distance en chiffrant tout le trafic entre le client et le serveur. Contrairement à Telnet qui transmet les données en texte clair, SSH protège les informations sensibles comme les identifiants de connexion et les commandes exécutées, ce qui en fait le protocole privilégié pour l'administration à distance sécurisée."
            },
            {
                id: 120,
                question: "Examinez l'illustration. Un administrateur réseau vérifie la configuration du routage inter-VLAN. Les utilisateurs se plaignent que PC2 ne peut pas communiquer avec PC1. Sur la base de la sortie, quelle est la cause possible du problème ?",
                options: {
                    a: "Gi0/0 n'est pas configuré comme port de jonction.",
                    b: "L'interface de commande GigabitEthernet0/0.5 a été saisie de manière incorrecte.",
                    c: "Aucune adresse IP n'est configurée sur l'interface Gi0/0.",
                    d: "La commande no shutdown n'est pas entrée sur les sous-interfaces.",
                    e: "La commande encapsulation dot1Q 5 contient le mauvais VLAN."
                },
                correct: "e",
                explanation: "Le problème est que la commande 'encapsulation dot1Q 5' sur la sous-interface contient le mauvais numéro de VLAN. Pour que le routage inter-VLAN fonctionne correctement, chaque sous-interface doit être configurée avec l'encapsulation dot1Q correspondant au VLAN qu'elle doit router. Si PC1 et PC2 sont dans des VLAN différents, la sous-interface doit être configurée avec le VLAN correct."
            },
            {
                id: 121,
                question: "Faites correspondre chaque type de message DHCP avec sa description.",
                options: {
                    a: "DHCPDISCOVER: un client initiant un message pour trouver un serveur DHCP",
                    b: "DHCPOFFER: un serveur DHCP répondant à la requête initiale d'un client",
                    c: "DHCPREQUEST: le client acceptant l'adresse IP fournie par le serveur DHCP",
                    d: "DHCPACK: le serveur DHCP confirmant que le bail a été accepté"
                },
                correct: "a,b,c,d",
                explanation: "Les quatre principaux types de messages DHCP et leurs descriptions sont: 1) DHCPDISCOVER: envoyé par un client pour initier le processus et trouver des serveurs DHCP disponibles, 2) DHCPOFFER: envoyé par un serveur DHCP en réponse à un DHCPDISCOVER pour offrir une adresse IP, 3) DHCPREQUEST: envoyé par le client pour accepter une offre spécifique, et 4) DHCPACK: envoyé par le serveur pour confirmer l'attribution du bail."
            },
            {
                id: 122,
                question: "Quelle attaque réseau cherche à créer un DoS pour les clients en les empêchant d'obtenir un bail DHCP ?",
                options: {
                    a: "Usurpation d'adresse IP",
                    b: "Famine DHCP",
                    c: "Attaque de table CAM",
                    d: "Spoofing DHCP"
                },
                correct: "b",
                explanation: "Une attaque par famine DHCP (DHCP starvation) vise à épuiser toutes les adresses IP disponibles dans le pool DHCP en envoyant un grand nombre de demandes DHCP avec différentes adresses MAC falsifiées. Cela empêche les clients légitimes d'obtenir des adresses IP, créant ainsi un déni de service (DoS) sur le réseau."
            },
            {
                id: 123,
                question: "Quelle commande permettra à un routeur de commencer à envoyer des messages lui permettant de configurer une adresse lien-local sans utiliser de serveur DHCP IPv6 ?",
                options: {
                    a: "un itinéraire statique",
                    b: "la route ipv6 ::/0 commande",
                    c: "la commande ipv6 unicast-routing",
                    d: "la commande de routage ip"
                },
                correct: "c",
                explanation: "La commande 'ipv6 unicast-routing' active le routage IPv6 sur un routeur Cisco et permet au routeur de commencer à envoyer des messages Router Advertisement (RA). Ces messages permettent aux hôtes sur le réseau de configurer automatiquement leurs adresses IPv6 lien-local et globales sans avoir besoin d'un serveur DHCPv6, en utilisant le mécanisme SLAAC (Stateless Address Autoconfiguration)."
            },
            {
                id: 124,
                question: "Quel est l'effet de la saisie de la commande de configuration ip dhcp snooping limit rate 6 sur un commutateur ?",
                options: {
                    a: "Il affiche les associations d'adresses IP-MAC pour les interfaces de commutateur.",
                    b: "Il active la sécurité des ports globalement sur le commutateur.",
                    c: "Il restreint le nombre de messages de découverte, par seconde, à recevoir sur l'interface.",
                    d: "Il apprend dynamiquement l'adresse L2 et la copie dans la configuration en cours."
                },
                correct: "c",
                explanation: "La commande 'ip dhcp snooping limit rate 6' limite le nombre de messages DHCP que le commutateur acceptera par seconde sur l'interface où elle est configurée. Cette limitation aide à prévenir les attaques de type DHCP starvation où un attaquant inonde le réseau de messages DHCP pour épuiser le pool d'adresses disponibles."
            },
            {
                id: 125,
                question: "Quel est l'effet de la saisie de la commande de configuration ip arp inspection validate src-mac sur un commutateur ?",
                options: {
                    a: "Il vérifie l'adresse L2 source dans l'en-tête Ethernet par rapport à l'adresse L2 de l'expéditeur dans le corps ARP.",
                    b: "Cela désactive tous les ports de jonction.",
                    c: "Il affiche les associations d'adresses IP-MAC pour les interfaces de commutateur.",
                    d: "Il active le portfast sur une interface de commutateur spécifique."
                },
                correct: "a",
                explanation: "La commande 'ip arp inspection validate src-mac' configure le commutateur pour vérifier que l'adresse MAC source dans l'en-tête Ethernet correspond à l'adresse MAC de l'expéditeur dans le corps du paquet ARP. Cette validation aide à détecter et à bloquer les paquets ARP falsifiés utilisés dans les attaques d'empoisonnement ARP."
            },
            {
                id: 126,
                question: "Quelle longueur d'adresse et de préfixe est utilisée lors de la configuration d'une route statique IPv6 par défaut ?",
                options: {
                    a: "::/0",
                    b: "FF02::1/8",
                    c: "0.0.0.0/0",
                    d: "::1/128"
                },
                correct: "a",
                explanation: "Pour configurer une route statique IPv6 par défaut, on utilise le préfixe ::/0. Ce préfixe correspond à toutes les adresses IPv6 possibles, de la même manière que 0.0.0.0/0 correspond à toutes les adresses IPv4. Une route par défaut est utilisée lorsqu'aucune autre route plus spécifique ne correspond à l'adresse de destination d'un paquet."
            },
            {
                id: 127,
                question: "Quelles sont les deux caractéristiques de Cisco Express Forwarding (CEF) ?",
                options: {
                    a: "Lorsqu'un paquet arrive sur une interface de routeur, il est transmis au plan de contrôle où le processeur fait correspondre l'adresse de destination avec une entrée de table de routage correspondante.",
                    b: "Il s'agit du mécanisme de transfert le plus rapide sur les routeurs Cisco et les commutateurs multicouches.",
                    c: "Avec cette méthode de commutation, les informations de flux pour un paquet sont stockées dans le cache à commutation rapide pour transférer les futurs paquets vers la même destination sans intervention du processeur.",
                    d: "Les paquets sont transférés en fonction des informations contenues dans le FIB et d'un tableau de contiguïté.",
                    e: "Lorsqu'un paquet arrive sur une interface de routeur, il est transmis au plan de contrôle où le processeur recherche une correspondance dans le cache à commutation rapide."
                },
                correct: "b,d",
                explanation: "Cisco Express Forwarding (CEF) est caractérisé par deux éléments clés: 1) C'est le mécanisme de transfert le plus rapide disponible sur les routeurs Cisco et les commutateurs multicouches, et 2) Il utilise une base d'informations de transfert (FIB) et une table de contiguïté pour prendre des décisions de transfert de paquets sans avoir à consulter la table de routage pour chaque paquet."
            },
            {
                id: 128,
                question: "Quel terme décrit le rôle d'un commutateur Cisco dans le contrôle d'accès basé sur les ports 802.1X ?",
                options: {
                    a: "agent",
                    b: "suppliant",
                    c: "authentificateur",
                    d: "serveur d'authentification"
                },
                correct: "c",
                explanation: "Dans le contrôle d'accès basé sur les ports 802.1X, un commutateur Cisco joue le rôle d'authentificateur. L'authentificateur agit comme un intermédiaire entre le suppliant (le périphérique client qui demande l'accès au réseau) et le serveur d'authentification (généralement un serveur RADIUS). Le commutateur bloque tout le trafic sauf les messages d'authentification jusqu'à ce que le client soit authentifié."
            },
            {
                id: 129,
                question: "Quelle solution Cisco permet d'éviter les attaques d'usurpation d'identité ARP et d'empoisonnement ARP ?",
                options: {
                    a: "Inspection ARP dynamique",
                    b: "Protection des sources IP",
                    c: "Snooping DHCP",
                    d: "Sécurité des ports"
                },
                correct: "a",
                explanation: "L'Inspection ARP Dynamique (DAI) est la solution Cisco conçue spécifiquement pour prévenir les attaques d'usurpation d'identité ARP et d'empoisonnement ARP. DAI vérifie les paquets ARP en les comparant à la base de données de liaison DHCP snooping pour s'assurer que les mappages adresse MAC-adresse IP sont légitimes, bloquant ainsi les paquets ARP falsifiés."
            },
            {
                id: 130,
                question: "Quel est l'avantage de PVST+ ?",
                options: {
                    a: "PVST+ optimise les performances sur le réseau grâce à la sélection automatique du pont racine.",
                    b: "PVST+ réduit la consommation de bande passante par rapport aux implémentations traditionnelles de STP qui utilisent CST.",
                    c: "PVST+ nécessite moins de cycles CPU pour tous les commutateurs du réseau.",
                    d: "PVST+ optimise les performances sur le réseau grâce au partage de charge."
                },
                correct: "d",
                explanation: "L'avantage principal de PVST+ (Per-VLAN Spanning Tree Plus) est qu'il permet d'optimiser les performances du réseau grâce au partage de charge. Contrairement au STP standard qui crée un seul arbre couvrant pour tout le réseau, PVST+ crée un arbre couvrant distinct pour chaque VLAN, permettant ainsi d'utiliser différents chemins pour différents VLANs et d'équilibrer le trafic sur plusieurs liaisons."
            },
            {
                id: 131,
                question: "Quel protocole ou quelle technologie utilise un routeur de secours pour assumer la responsabilité du transfert de paquets si le routeur actif tombe en panne ?",
                options: {
                    a: "EtherChannel",
                    b: "DTP",
                    c: "HSRP",
                    d: "VTP"
                },
                correct: "c",
                explanation: "HSRP (Hot Standby Router Protocol) est un protocole de redondance qui utilise un routeur de secours pour assumer la responsabilité du transfert de paquets si le routeur actif tombe en panne. HSRP permet à un groupe de routeurs de présenter une adresse IP virtuelle unique aux hôtes du réseau, assurant ainsi une haute disponibilité de la passerelle par défaut."
            },
            {
                id: 132,
                question: "Quelle action a lieu lorsque l'adresse MAC source d'une trame entrant dans un commutateur est dans la table d'adresses MAC ?",
                options: {
                    a: "Le commutateur transfère la trame hors du port spécifié.",
                    b: "Le commutateur met à jour la minuterie d'actualisation de l'entrée.",
                    c: "Le commutateur remplace l'ancienne entrée et utilise le port le plus récent.",
                    d: "Le commutateur ajoute une entrée de table d'adresses MAC pour l'adresse MAC de destination et le port de sortie."
                },
                correct: "b",
                explanation: "Lorsqu'un commutateur reçoit une trame dont l'adresse MAC source est déjà présente dans sa table d'adresses MAC et associée au même port d'entrée, il met à jour la minuterie d'actualisation de cette entrée. Cela permet de maintenir l'entrée active dans la table et d'éviter qu'elle ne soit supprimée par le processus de vieillissement (aging)."
            },
            {
                id: 133,
                question: "Une petite maison d'édition a une conception de réseau telle que lorsqu'une diffusion est envoyée sur le réseau local, 200 appareils reçoivent la diffusion transmise. Comment l'administrateur réseau peut-il réduire le nombre d'appareils recevant du trafic de diffusion ?",
                options: {
                    a: "Ajoutez plus de commutateurs afin que moins d'appareils soient sur un commutateur particulier.",
                    b: "Remplacez les commutateurs par des commutateurs dotés de plus de ports par commutateur. Cela permettra à plus d'appareils sur un commutateur particulier.",
                    c: "Segmentez le réseau local en réseaux locaux plus petits et acheminez entre eux.",
                    d: "Remplacez au moins la moitié des commutateurs par des concentrateurs pour réduire la taille du domaine de diffusion."
                },
                correct: "c",
                explanation: "Pour réduire le nombre d'appareils recevant du trafic de diffusion, la meilleure solution est de segmenter le réseau local en réseaux locaux plus petits (VLANs) et d'utiliser des routeurs entre eux. Les routeurs ne transmettent pas les diffusions d'un réseau à l'autre, ce qui limite la portée des diffusions à chaque segment de réseau individuel, réduisant ainsi le nombre d'appareils affectés."
            },
            {
                id: 134,
                question: "Qu'est-ce qui définit une route hôte sur un routeur Cisco ?",
                options: {
                    a: "L'adresse lien-local est ajoutée automatiquement à la table de routage en tant que route hôte IPv6.",
                    b: "Une configuration de route hôte statique IPv4 utilise une adresse IP de destination d'un appareil spécifique et un masque de sous-réseau /32.",
                    c: "Une route hôte est désignée par un C dans la table de routage.",
                    d: "Une route hôte IPv6 statique doit inclure le type d'interface et le numéro d'interface du routeur du prochain saut."
                },
                correct: "b",
                explanation: "Une route hôte sur un routeur Cisco est définie comme une route qui pointe vers un hôte spécifique (un seul périphérique) plutôt que vers un réseau entier. Pour IPv4, une route hôte statique est configurée avec l'adresse IP exacte de l'hôte de destination et un masque de sous-réseau /32 (255.255.255.255), qui indique qu'il s'agit d'une seule adresse IP et non d'un réseau."
            },
            {
                id: 135,
                question: "Quoi d'autre est requis lors de la configuration d'une route statique IPv6 à l'aide d'une adresse lien-local de prochain saut ?",
                options: {
                    a: "distance administrative",
                    b: "adresse IP du routeur voisin",
                    c: "numéro de réseau et masque de sous-réseau sur l'interface du routeur voisin",
                    d: "numéro et type d'interface"
                },
                correct: "d",
                explanation: "Lors de la configuration d'une route statique IPv6 utilisant une adresse lien-local comme prochain saut, il est également nécessaire de spécifier le numéro et le type d'interface de sortie. Cela est dû au fait que les adresses lien-local ne sont pas uniques sur le réseau et ne sont valides que sur un lien spécifique, donc le routeur doit savoir par quelle interface envoyer le paquet."
            },
            {
                id: 136,
                question: "Un technicien configure un réseau sans fil pour une petite entreprise à l'aide d'un routeur sans fil SOHO. Quelles sont les deux méthodes d'authentification utilisées si le routeur est configuré avec WPA2 ?",
                options: {
                    a: "personnel",
                    b: "AES",
                    c: "TKIP",
                    d: "WEP",
                    e: "entreprise"
                },
                correct: "a,e",
                explanation: "WPA2 (Wi-Fi Protected Access 2) offre deux méthodes d'authentification principales: 1) WPA2-Personnel (également appelé WPA2-PSK), qui utilise une clé pré-partagée pour l'authentification et est adapté aux petits réseaux, et 2) WPA2-Entreprise, qui utilise un serveur d'authentification externe (généralement RADIUS) pour vérifier les identifiants des utilisateurs et est plus adapté aux environnements d'entreprise nécessitant une sécurité renforcée."
            },
            {
                id: 137,
                question: "Un PC a envoyé un message RS à un routeur IPv6 connecté au même réseau. Quelles sont les deux informations que le routeur enverra au client ?",
                options: {
                    a: "longueur du préfixe",
                    b: "masque de sous-réseau en notation décimale à points",
                    c: "nom de domaine",
                    d: "distance administrative",
                    e: "préfixe",
                    f: "Adresse IP du serveur DNS"
                },
                correct: "a,e",
                explanation: "Lorsqu'un PC envoie un message RS (Router Solicitation) à un routeur IPv6, le routeur répond avec un message RA (Router Advertisement) qui contient, entre autres informations, le préfixe du réseau et la longueur de ce préfixe. Ces deux informations sont essentielles pour que le client puisse configurer automatiquement son adresse IPv6 via SLAAC (Stateless Address Autoconfiguration)."
            },
            {
                id: 138,
                question: "Lorsqu'ils assistent à une conférence, les participants utilisent des ordinateurs portables pour la connectivité réseau. Lorsqu'un orateur invité tente de se connecter au réseau, l'ordinateur portable ne parvient pas à afficher les réseaux sans fil disponibles. Le point d'accès doit fonctionner dans quel mode ?",
                options: {
                    a: "mixte",
                    b: "passif",
                    c: "actif",
                    d: "ouvrir"
                },
                correct: "c",
                explanation: "Si un ordinateur portable ne parvient pas à afficher les réseaux sans fil disponibles, c'est probablement parce que le point d'accès fonctionne en mode actif (ou mode non-broadcast SSID). Dans ce mode, le point d'accès n'émet pas de balises contenant le SSID, ce qui rend le réseau 'invisible' aux analyses standard. Les utilisateurs doivent connaître le nom exact du réseau pour s'y connecter."
            },
            {
                id: 139,
                question: "Quels sont les trois composants combinés pour former un identifiant de pont ?",
                options: {
                    a: "ID système étendu",
                    b: "coût",
                    c: "Adresse IP",
                    d: "priorité du pont",
                    e: "Adresse MAC",
                    f: "ID de port"
                },
                correct: "a,d,e",
                explanation: "L'identifiant de pont (Bridge ID) dans le protocole Spanning Tree est formé par la combinaison de trois composants: 1) La priorité du pont, qui est une valeur configurable utilisée pour influencer l'élection du pont racine, 2) L'ID système étendu, qui est généralement le numéro de VLAN, et 3) L'adresse MAC du commutateur, qui assure l'unicité de l'identifiant de pont."
            }
        ];
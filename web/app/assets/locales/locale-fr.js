module.exports = {
    languages: {
        en: "Anglais",
        fr: "Français",
        switch: "Changer de langue"
    },
    header: {
        title: "Graphene",
        dashboard: "Accueil",
        explorer: "Explorer",
        exchange: "Échange",
        payments: "Paiments",
        logout: "Déconnexion",
        settings: "Options",
        current: "Mon Compte"
    },
    account: {
        assets: "Actifs",
        value: "Valeur",
        hour_24: "24hrs",
        recent: "Activité recent",
        name: "Nom du compte",
        member: {
            stats: "Stats membre",
            join: "Inscription",
            reg: "Enregistré par",
            ref: "Recruté par",
            referrals: "Recrutements",
            rewards: "Gains totaux",
            cashback: "Gagné",
            vested: "Bloqué"
        },
        connections: {
            known: "Connu par",
            "black": "Blacklisté par"
        }
    },
    transfer: {
        from: "De",
        amount: "Montant",
        to: "À",
        memo: "Message",
        fee: "Frais",
        send: "Envoyer",
        final: "Soldes finaux",
        balances: "Soldes",
        errors: {
            req: "Champ obligatoire",
            pos: "Le montant doit étre positif",
            valid: "Veuillez rentrer un chiffre positif"
        },
        back: "REVENIR",
        confirm: "CONFIRMER",
        broadcast: "Votre transfert a bien été soumis au reseau",
        again: "FAIRE UN AUTRE TRANSFERT",
        see: "VOIRE MES TRANSFERTS"
    },
    transaction: {
        sent: "A envoyé",
        to: "à",
        received: "A reçu",
        from: "de",
        amount_sell: "Montant à vendre",
        expiration: "Expiration",
        fill_or: "Fill or kill",
        min_receive: "Montant minimum à recevoir",
        seller: "Vendeur",
        collateral: "Collateral",
        coll_ratio: "Ratio de collateral initiale",
        coll_maint: "Ratio de Collateral de maintenance",
        create_key: "A créé une cléf public",
        reg_account: "A créé le compte",
        was_reg_account: " a été créé par",
        create_asset: "A créé l'actif",
        limit_order: "A placé un ordre à limite pour vendre",
        limit_order_cancel: "Annulation de l'ordre à limite avec id",
        short_order: "A placé un ordre à découvert pour vendre",
        at: "à",
        coll_of: "avec collateral de",
        call_order_update: "A mis à jour un ordre à découvert",
        upgrade_account: "A mis à niveau le compte",
        update_account: "A mis à jour le compte",
        whitelist_account: "A whitelisté le compte",
        whitelisted_by: "A été whitelisté par le compte",
        transfer_account: "A transferé le compte",
        update_asset: "A mis à jour l'actif",
        update_feed_producers: "A mis à jour les fornisseurs de flux de l'actif",
        feed_producer: "Est devenu un fornisseur de flux pour l'actif",
        asset_issue: "A assigné",
        was_issued: "A été assigné",
        by: "par",
        burn_asset: "A détruit",
        fund_pool: "A financé un pot de frais avec",
        asset_settle: "Requested settlement of",
        asset_global_settle: "Requested global settlement of",
        publish_feed: "A publié un nouveau flux pour l'actif",
        delegate_create: "A créé le délégué",
        witness_create: "A créé le témoin",
        witness_pay: "A retiré",
        proposal_create: "A créé une proposition",
        proposal_update: "A mis à jour une proposition",
        proposal_delete: "A supprimé une proposition",
        withdraw_permission_create: "A donné une permission de retrait du compte",
        withdraw_permission_update: "A mis à jour les permissions de retrait du compte",
        withdraw_permission_claim: "A pris les permissions de retrait du compte",
        withdraw_permission_delete: "A supprimé les permissions de retrait du compte",
        paid: "A payé",
        obtain: "pour obtenir",
        global_parameters_update: "A mis à jour les parametres globaux",
        file_write: "A écrit un fichier",
        vesting_balance_create: "a créé un solde bloqué pour",
        for: "pour",
        vesting_balance_withdraw: "A retiré du solde bloqué",
        bond_create_offer: "A créé une offre d'obligation",
        bond_cancel_offer: "A annulé l'offre d'obligation",
        bond_accept_offer: "A accepté l'offre d'obligation pour",
        bond_claim_collateral: "A récuperé un collateral de",
        bond_pay_collateral: "A payé un collateral de",
        create_worker: "A créé un ouvrier avec un salaire de",
        custom: "A créé une operation spéciale",
        order_id: "ID de l'ordre",
        trxTypes: {
            0: "Transfert",
            1: "Ordre à limite",
            2: "Ordre à découvert",
            3: "Annulation d'ordre à limite",
            4: "Annulation d'ordre à découvert",
            5: "Mise à jour d'ordre à découvert",
            6: "Création de cléf",
            7: "Création de compte",
            8: "Mise à jour de compte",
            9: "Whiteliste de compte",
            10: "Mise à niveau de compte",
            11: "Transfert de compte",
            12: "Creation d'actif",
            13: "Mise à jour d'actif",
            14: "Mise à jour d'actif de marché",
            15: "Mise à jour des flux",
            16: "Assigner d'un actif",
            17: "Destruction d'actif",
            18: "Financement de pot de frais",
            19: "Couvrement d'actif",
            20: "Couvrement global d'actif",
            21: "Publication de flux",
            22: "Création de délégué",
            23: "Création de témoin",
            24: "Retrait de salaire de témoin",
            25: "Création d'une proposition",
            26: "Mise à jour d'une proposition",
            27: "Suppresion d'une proposition",
            28: "Accord de permission de retrait",
            29: "Mise à jour de permission de retrait",
            30: "Prise de permissions de retrait",
            31: "Suppresion des permissions de retrait",
            32: "Remplissage d'ordre",
            33: "Mise à jour des parametres globaux",
            34: "Écriture de fichier",
            35: "Création de solde bloqué",
            36: "Retrait de solde bloqué",
            37: "Création d'offre d'obligation",
            38: "Annulation d'offre d'obligation",
            39: "Acceptation d'offre d'obligation",
            40: "Démande de collateral d'obligation",
            41: "Création d'ouvrier",
            42: "Spécial"
        }
    },
    explorer: {
        accounts: {
            title: "Comptes"
        },
        blocks: {
            title: "Blockchain",
            globals: "Parametres globaux",
            recent: "Blocs recent"
        },
        block: {
            title: "Bloc",
            id: "ID du bloc",
            witness: "Témoin",
            count: "Nombre de transactions",
            date: "Date",
            previous: "Précédent",
            previous_secret: "Précédent secret",
            next_secret: "Prochain hash secret",
            op: "Operation",
            trx: "Transaction",
            op_type: "Type d'operation",
            fee_payer: "Compte payant le frai",
            key: "Cléf public",
            transactions: "Nombre de transactions",
            account_upgrade: "Compte à mettre à niveau",
            lifetime: "Devenir membre à vie",
            authorizing_account: "Compte donnant l'autorisation",
            listed_account: "Compte etant autorisé",
            new_listing: "Nouvel autorisation",
            asset_update: "Actif à mettre à jour",
            common_options: "Options",
            new_options: "Nouvelles options",
            new_producers: "Nouveaux fornisseurs de flux",
            asset_issue: "Montant à créer"
        },
        assets: {
            title: "Actifs",
            market: "SmartCoins",
            user: "Actifs des utilisateurs",
            symbol: "Symbol",
            id: "ID",
            issuer: "Créateur",
            precision: "Précision"
        },
        asset: {
            title: "Actif"
        },
        witnesses: {
            title: "Témoins"
        },
        delegates: {
            title: "Délégués"
        },
        delegate: {
            title: "Delegate"
        },
        workers: {
            title: "Ouvriers"
        },
        proposals: {
            title: "Propositions"
        },
        account: {
            title: "Compte"
        }

    }
};

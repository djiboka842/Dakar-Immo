// ==================== DONNÉES DES PROPRIÉTÉS ====================

const interiorImageSets = {
    bedrooms: [
        "assets/interieur-chambre-supplementaire-1.jpg",
        "assets/interieur-chambre-supplementaire-2.jpg",
        "assets/interieur-chambre-hotel.jpg",
        "assets/interieur-chambre-claire.jpg",
        "assets/interieur-chambre-lit-double.jpg"
    ],
    bathrooms: [
        "assets/interieur-salle-de-bain-douche.jpg",
        "assets/interieur-salle-de-bain-douche-2.jpg",
        "assets/interieur-salle-de-bain-vasque.jpg",
        "assets/interieur-salle-de-bain-2.jpg",
        "assets/interieur-salle-de-bain-baignoire.jpg",
        "assets/interieur-salle-de-bain-claire.jpg"
    ],
    kitchens: [
        "assets/interieur-cuisine-moderne.jpg",
        "assets/interieur-cuisine.jpg"
    ]
};

function createInteriorGallery(property, startOffset, livingRoomImages) {
    const gallery = [];
    const categories = [
        { key: "bedrooms", label: "Chambre" },
        { key: "bathrooms", label: "Salle de bain" },
        { key: "livingRooms", label: "Salon" },
        { key: "kitchens", label: "Cuisine" }
    ];

    categories.forEach(function(category) {
        const count = property[category.key] || 0;
        const images = category.key === "livingRooms"
            ? livingRoomImages
            : interiorImageSets[category.key];

        for (let index = 0; index < count; index += 1) {
            const imageIndex = category.key === "livingRooms"
                ? index
                : (startOffset + index) % images.length;
            gallery.push({
                image: encodeURI(images[imageIndex]),
                label: (category.key === "livingRooms" ? "Salon TV" : category.label) +
                    " " + (index + 1) + " (illustration)"
            });
        }
    });

    return gallery;
}

const properties = [
    {
        title: "Villa moderne aux Almadies",
        location: "Almadies, Dakar",
        price: "250 000 000 FCFA",
        priceAmount: 250000000,
        transaction: "Achat",
        availability: "Disponible",
        updatedAt: "2026-10-05",
        type: "Villa",
        coordinates: [14.7445, -17.5145],
        image: encodeURI("assets/villa-moderne aux almadies.jpg"),
        gallery: [
            { image: encodeURI("assets/villa.jpg"), label: "Autre vue extérieure" }
        ].concat(createInteriorGallery({
            bedrooms: 5,
            bathrooms: 4,
            livingRooms: 2,
            kitchens: 1
        }, 0, [
            "assets/tv-salon-bibliotheque.jpg",
            "assets/tv-salon-meuble-blanc.jpg"
        ])),
        bedrooms: 5,
        bathrooms: 4,
        livingRooms: 2,
        kitchens: 1,
        surface: "350 m²",
        isDemo: true,
        description: "Annonce de démonstration. Magnifique villa moderne située aux Almadies, dans un quartier calme et résidentiel de Dakar. Les nombres de salons et de cuisines sont indicatifs et les photos intérieures de la galerie sont des illustrations."
    },

    {
        title: "Appartement moderne à Mermoz",
        location: "Mermoz, Dakar",
        price: "450 000 FCFA / mois",
        priceAmount: 450000,
        transaction: "Location",
        availability: "Disponible",
        updatedAt: "2026-10-05",
        type: "Appartement",
        coordinates: [14.7105, -17.4678],
        image: encodeURI("assets/appartement-moderne à mermoz.jpg"),
        gallery: [
            { image: encodeURI("assets/interieur-chambre-hotel.jpg"), label: "Chambre 1 (illustration)" },
            { image: encodeURI("assets/interieur-chambre-claire.jpg"), label: "Chambre 2 (illustration)" },
            { image: encodeURI("assets/interieur-chambre-supplementaire-1.jpg"), label: "Chambre 3 (illustration)" },
            { image: encodeURI("assets/interieur-salle-de-bain-douche.jpg"), label: "Salle de bain 1 (illustration)" },
            { image: encodeURI("assets/interieur-salle-de-bain-2.jpg"), label: "Salle de bain 2 (illustration)" },
            { image: encodeURI("assets/tv-salon-aquarium.jpg"), label: "Salon TV 1 (illustration)" },
            { image: encodeURI("assets/tv-salon-guitare.jpg"), label: "Salon TV 2 (illustration)" },
            { image: encodeURI("assets/interieur-cuisine-moderne.jpg"), label: "Cuisine 1 (illustration)" },
            { image: encodeURI("assets/interieur-cuisine.jpg"), label: "Cuisine 2 (illustration)" }
        ],
        bedrooms: 3,
        bathrooms: 2,
        livingRooms: 2,
        kitchens: 2,
        surface: "120 m²",
        isDemo: true,
        description: "Annonce de démonstration. Appartement moderne et lumineux situé à Mermoz, proche des commerces et des principales commodités. Prix, photos et caractéristiques indicatifs."
    },

    {
        title: "Terrain à Yoff",
        location: "Yoff, Dakar",
        price: "75 000 000 FCFA",
        priceAmount: 75000000,
        transaction: "Achat",
        availability: "Disponible",
        updatedAt: "2026-10-05",
        type: "Terrain",
        coordinates: [14.7553, -17.4735],
        image: encodeURI("assets/terrain à yoff.jpg"),
        bedrooms: 0,
        bathrooms: 0,
        surface: "300 m²",
        isDemo: true,
        description: "Annonce de démonstration. Terrain idéalement situé à Yoff pour la construction d'une maison ou d'un projet immobilier. Prix, photo et surface indicatifs."
    },

    {
        title: "Appartement lumineux à Ngor",
        location: "Ngor, Dakar",
        price: "650 000 FCFA / mois",
        priceAmount: 650000,
        transaction: "Location",
        availability: "Disponible",
        updatedAt: "2026-10-05",
        type: "Appartement",
        coordinates: [14.7496, -17.512],
        image: encodeURI("assets/appartement-ngor.jpg"),
        bedrooms: 3,
        bathrooms: 2,
        livingRooms: 1,
        kitchens: 1,
        gallery: createInteriorGallery({ bedrooms: 3, bathrooms: 2, livingRooms: 1, kitchens: 1 }, 1, [
            "assets/tv-salon-minimaliste.jpg"
        ]),
        surface: "110 m²",
        isDemo: true,
        description: "Annonce de démonstration. Séjour lumineux avec une grande baie vitrée, en illustration d'un appartement à Ngor. Photo, prix et caractéristiques indicatifs."
    },

    {
        title: "Appartement familial à la Cité Keur Gorgui",
        location: "Cité Keur Gorgui, Dakar",
        price: "550 000 FCFA / mois",
        priceAmount: 550000,
        transaction: "Location",
        availability: "Disponible",
        updatedAt: "2026-10-05",
        type: "Appartement",
        coordinates: [14.7188, -17.463],
        image: encodeURI("assets/appartement-ker-gorgui.jpg"),
        bedrooms: 2,
        bathrooms: 2,
        livingRooms: 1,
        kitchens: 1,
        gallery: createInteriorGallery({ bedrooms: 2, bathrooms: 2, livingRooms: 1, kitchens: 1 }, 2, [
            "assets/tv-salon-friends.jpg"
        ]),
        surface: "95 m²",
        isDemo: true,
        description: "Annonce de démonstration. Espace de vie ouvert et convivial, en illustration d'un appartement familial à la Cité Keur Gorgui. Photo, prix et caractéristiques indicatifs."
    },

    {
        title: "Appartement de standing au Point E",
        location: "Point E, Dakar",
        price: "125 000 000 FCFA",
        priceAmount: 125000000,
        transaction: "Achat",
        availability: "Disponible",
        updatedAt: "2026-10-05",
        type: "Appartement",
        coordinates: [14.6969, -17.455],
        image: encodeURI("assets/appartement-point-e.jpg"),
        bedrooms: 3,
        bathrooms: 2,
        livingRooms: 2,
        kitchens: 1,
        gallery: createInteriorGallery({ bedrooms: 3, bathrooms: 2, livingRooms: 2, kitchens: 1 }, 3, [
            "assets/tv-salon-hockey.jpg",
            "assets/tv-salon-mural-sombre.jpg"
        ]),
        surface: "135 m²",
        isDemo: true,
        description: "Annonce de démonstration. Intérieur contemporain aux finitions soignées, en illustration d'un appartement de standing au Point E. Photo, prix et caractéristiques indicatifs."
    },

    {
        title: "Villa avec jardin à Sacré-Cœur",
        location: "Sacré-Cœur, Dakar",
        price: "185 000 000 FCFA",
        priceAmount: 185000000,
        transaction: "Achat",
        availability: "Disponible",
        updatedAt: "2026-10-05",
        type: "Villa",
        coordinates: [14.728, -17.466],
        image: encodeURI("assets/villa-sacre-coeur.jpg"),
        bedrooms: 4,
        bathrooms: 3,
        livingRooms: 2,
        kitchens: 1,
        gallery: createInteriorGallery({ bedrooms: 4, bathrooms: 3, livingRooms: 2, kitchens: 1 }, 4, [
            "assets/tv-salon-mural-clair.jpg",
            "assets/tv-salon-canape-fonce.jpg"
        ]),
        surface: "260 m²",
        isDemo: true,
        description: "Annonce de démonstration. Villa contemporaine avec jardin, en illustration d'une maison familiale à Sacré-Cœur. Photo, prix et caractéristiques indicatifs."
    },

    {
        title: "Villa à louer aux Mamelles",
        location: "Mamelles, Dakar",
        price: "900 000 FCFA / mois",
        priceAmount: 900000,
        transaction: "Location",
        availability: "Disponible",
        updatedAt: "2026-10-05",
        type: "Villa",
        coordinates: [14.726, -17.507],
        image: encodeURI("assets/villa-mamelles.jpg"),
        bedrooms: 3,
        bathrooms: 3,
        livingRooms: 1,
        kitchens: 1,
        gallery: createInteriorGallery({ bedrooms: 3, bathrooms: 3, livingRooms: 1, kitchens: 1 }, 5, [
            "assets/tv-salon-mur-bois.jpg"
        ]),
        surface: "180 m²",
        isDemo: true,
        description: "Annonce de démonstration. Villa contemporaine à l'architecture moderne, en illustration d'une location aux Mamelles. Photo, prix et caractéristiques indicatifs."
    },

    {
        title: "Terrain à Ouakam",
        location: "Ouakam, Dakar",
        price: "48 000 000 FCFA",
        priceAmount: 48000000,
        transaction: "Achat",
        availability: "Disponible",
        updatedAt: "2026-10-05",
        type: "Terrain",
        coordinates: [14.723, -17.489],
        image: encodeURI("assets/terrain à yoff.jpg"),
        bedrooms: 0,
        bathrooms: 0,
        surface: "200 m²",
        isDemo: true,
        description: "Annonce de démonstration. Terrain à Ouakam ; prix et surface indicatifs."
    }
];

function getOptimizedImageUrl(imageUrl) {
    return imageUrl.replace(/^assets\//, "assets/optimized/");
}

properties.forEach(function(property) {
    property.image = getOptimizedImageUrl(property.image);
    (property.gallery || []).forEach(function(photo) {
        photo.image = getOptimizedImageUrl(photo.image);
    });
});


// ==================== RÉCUPÉRER LE CONTENEUR ==================

const propertiesContainer =
    document.querySelector("#properties-container");

const resultsCount =
    document.querySelector("#results-count");

const searchInput =
    document.querySelector("#search-input");

const searchBtn =
    document.querySelector("#search-btn");

const sendSearchWhatsAppButton =
    document.querySelector("#send-search-whatsapp");

const filterButtons =
    document.querySelectorAll(".filter-btn[data-type]");

const favoritesFilterButton =
    document.querySelector("#favorites-filter");

const transactionFilter =
    document.querySelector("#transaction-filter");

const priceSort =
    document.querySelector("#price-sort");

const bedroomFilter =
    document.querySelector("#bedroom-filter");

const budgetFilter =
    document.querySelector("#budget-filter");

const budgetMin =
    document.querySelector("#budget-min");

const budgetMax =
    document.querySelector("#budget-max");

const budgetFilterTitle =
    document.querySelector("#budget-filter-title");

const budgetFilterHint =
    document.querySelector("#budget-filter-hint");

const filterError =
    document.querySelector("#filter-error");

const propertyMapElement =
    document.querySelector("#property-map");

const mapStatus =
    document.querySelector("#map-status");

const compareToolbar =
    document.querySelector("#compare-toolbar");

const compareStatus =
    document.querySelector("#compare-status");

const compareSelection =
    document.querySelector("#compare-selection");

const openComparison =
    document.querySelector("#open-comparison");

const clearComparison =
    document.querySelector("#clear-comparison");

const comparisonModal =
    document.querySelector("#comparison-modal");

const closeComparison =
    document.querySelector("#close-comparison");

const comparisonTableContainer =
    document.querySelector("#comparison-table-container");

    const propertyModal =
    document.querySelector("#property-modal");

const closeModal =
    document.querySelector("#close-modal");

const modalImage =
    document.querySelector("#modal-image");

const modalGallery =
    document.querySelector("#modal-gallery");

const modalGalleryFilters =
    document.querySelectorAll("[data-gallery-category]");

const modalType =
    document.querySelector("#modal-type");

const modalTitle =
    document.querySelector("#modal-title");

const modalLocation =
    document.querySelector("#modal-location");

const modalAvailability =
    document.querySelector("#modal-availability");

const modalPrice =
    document.querySelector("#modal-price");

const modalBedrooms =
    document.querySelector("#modal-bedrooms");

const modalBathrooms =
    document.querySelector("#modal-bathrooms");

const modalSurface =
    document.querySelector("#modal-surface");

const modalDescription =
    document.querySelector("#modal-description");

const modalContact =
    document.querySelector("#modal-contact");

const modalFavorite =
    document.querySelector("#modal-favorite");

const requestVisitButton =
    document.querySelector("#request-visit");

const visitModal =
    document.querySelector("#visit-modal");

const closeVisitButton =
    document.querySelector("#close-visit");

const visitProperty =
    document.querySelector("#visit-property");

const visitForm =
    document.querySelector("#visit-form");

const visitDateTime =
    document.querySelector("#visit-datetime");

const shareModalProperty =
    document.querySelector("#share-modal-property");

const shareFeedback =
    document.querySelector("#share-feedback");

visitDateTime.addEventListener("input", function() {
    visitDateTime.setCustomValidity("");
});

const contactForm =
    document.querySelector("#contact-form");

const contactProperty =
    document.querySelector("#contact-property");

const contactMessage =
    document.querySelector("#contact-message");

const whatsappQuickContact =
    document.querySelector("#whatsapp-quick-contact");

const backToTopButton =
    document.querySelector("#back-to-top");

const agencyWhatsAppLink =
    document.querySelector("#agency-whatsapp-link");


// ==================== FILTRE ACTUEL ====================

let currentType = "Tous";
let currentFavoritesOnly = false;
let currentTransaction = "Tous";
let currentPriceSort = "featured";
let currentBedroomFilter = "Tous";
let currentBudgetMin = null;
let currentBudgetMax = null;
const comparedProperties = new Set();
let propertyMap = null;
let propertyMapMarkers = null;
const favoriteStorageKey = "dakar-immo-favorites";
const favoriteProperties = loadFavoriteProperties();
let activeModalProperty = null;
const whatsappNumber = whatsappQuickContact.dataset.whatsappNumber;
let shareFeedbackTimeout = null;

function createWhatsAppUrl(message) {
    return "https://wa.me/" + whatsappNumber + "?text=" +
        encodeURIComponent(message);
}

function getLocalDateTimeValue(date) {
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().slice(0, 16);
}

function formatPropertyUpdatedDate(property) {
    const updatedDate = new Date(property.updatedAt + "T00:00:00");
    return new Intl.DateTimeFormat("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(updatedDate);
}

function getPropertyAvailabilityLabel(property) {
    return property.isDemo ? "Exemple indicatif" : property.availability;
}

function getPropertyUpdatedLabel(property) {
    return property.isDemo
        ? "Non applicable (exemple indicatif)"
        : formatPropertyUpdatedDate(property);
}

function createPropertySlug(title) {
    return title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function getPropertyShareDetails(property) {
    const shareUrl = new URL(window.location.href);
    const canShareUrl = shareUrl.protocol === "http:" ||
        shareUrl.protocol === "https:";

    if (canShareUrl) {
        shareUrl.searchParams.set("bien", createPropertySlug(property.title));
        shareUrl.hash = "";
    }

    const text = [
        property.title,
        property.type + " · " + property.transaction,
        property.isDemo
            ? "EXEMPLE INDICATIF — prix, photos, caractéristiques et disponibilité non contractuels."
            : "Disponibilité : " + getPropertyAvailabilityLabel(property),
        property.isDemo
            ? ""
            : "Mise à jour : " + getPropertyUpdatedLabel(property),
        property.price,
        property.location
    ].filter(Boolean).join("\n");
    const copyText = text + (canShareUrl ? "\n" + shareUrl.toString() : "");

    return {
        text: text,
        copyText: copyText,
        url: canShareUrl ? shareUrl.toString() : ""
    };
}

function showShareFeedback(message, isError) {
    window.clearTimeout(shareFeedbackTimeout);
    shareFeedback.textContent = message;
    shareFeedback.classList.toggle("is-error", Boolean(isError));
    shareFeedback.hidden = false;
    shareFeedbackTimeout = window.setTimeout(function() {
        shareFeedback.hidden = true;
    }, 5000);
}

async function copyShareText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return;
        } catch (error) {
            console.warn("La copie moderne a échoué, essai de la méthode de secours.", error);
        }
    }

    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = text;
    temporaryInput.setAttribute("readonly", "");
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.appendChild(temporaryInput);
    let copied = false;
    try {
        temporaryInput.select();
        copied = document.execCommand("copy");
    } finally {
        temporaryInput.remove();
    }

    if (!copied) {
        throw new Error("La copie dans le presse-papiers a été refusée.");
    }
}

async function shareProperty(propertyTitle) {
    const property = properties.find(function(item) {
        return item.title === propertyTitle;
    });
    if (!property) {
        showShareFeedback("Le bien à partager est introuvable.", true);
        return;
    }

    const shareDetails = getPropertyShareDetails(property);
    if (navigator.share) {
        try {
            await navigator.share({
                title: property.title,
                text: shareDetails.text,
                url: shareDetails.url || undefined
            });
            showShareFeedback("Le partage de l’annonce a été ouvert.", false);
            return;
        } catch (error) {
            if (error.name === "AbortError") {
                return;
            }
            console.error("Le partage natif de l’annonce a échoué.", error);
        }
    }

    try {
        await copyShareText(shareDetails.copyText);
        showShareFeedback(
            shareDetails.url
                ? "Les informations et le lien de l’annonce ont été copiés."
                : "Les informations de l’annonce ont été copiées. Le site doit être publié en ligne pour partager un lien accessible.",
            false
        );
    } catch (error) {
        console.error("Impossible de partager ou copier l’annonce.", error);
        showShareFeedback(
            "Impossible de partager l’annonce. Vérifiez les autorisations de partage ou de copie du navigateur.",
            true
        );
    }
}

whatsappQuickContact.href = createWhatsAppUrl(
    "Bonjour Dakar Immo, je souhaite obtenir des informations sur vos biens."
);
agencyWhatsAppLink.href = whatsappQuickContact.href;

function updateBackToTopButton() {
    backToTopButton.hidden = window.scrollY < 500;
}

window.addEventListener("scroll", updateBackToTopButton, { passive: true });
updateBackToTopButton();

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth"
    });
});

function loadFavoriteProperties() {
    try {
        const storedFavorites = window.localStorage.getItem(favoriteStorageKey);
        if (storedFavorites === null) {
            return new Set();
        }

        const parsedFavorites = JSON.parse(storedFavorites);
        if (!Array.isArray(parsedFavorites)) {
            throw new TypeError("Les favoris enregistrés ne sont pas une liste.");
        }

        return new Set(parsedFavorites.filter(function(title) {
            return typeof title === "string" &&
                properties.some(function(property) {
                    return property.title === title;
                });
        }));
    } catch (error) {
        console.error("Impossible de charger les favoris enregistrés.", error);
        return new Set();
    }
}

function saveFavoriteProperties() {
    try {
        window.localStorage.setItem(
            favoriteStorageKey,
            JSON.stringify(Array.from(favoriteProperties))
        );
    } catch (error) {
        console.error("Impossible d'enregistrer les favoris.", error);
    }
}

function renderComparisonToolbar() {
    const selectedProperties = properties.filter(function(property) {
        return comparedProperties.has(property.title);
    });

    compareToolbar.hidden = selectedProperties.length === 0;
    compareStatus.textContent = selectedProperties.length + " bien" +
        (selectedProperties.length > 1 ? "s" : "") + " sélectionné" +
        (selectedProperties.length > 1 ? "s" : "") + " sur 2";
    openComparison.disabled = selectedProperties.length !== 2;
    compareSelection.replaceChildren();

    selectedProperties.forEach(function(property) {
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "compare-selected-item";
        removeButton.dataset.removeComparison = property.title;
        removeButton.textContent = "Retirer " + property.title;
        compareSelection.appendChild(removeButton);
    });

    document.querySelectorAll(".compare-toggle").forEach(function(button) {
        const isSelected = comparedProperties.has(button.dataset.title);
        button.setAttribute("aria-pressed", String(isSelected));
        button.textContent = isSelected ? "Retirer de la comparaison" : "Comparer";
    });
}

function toggleComparedProperty(propertyTitle) {
    if (comparedProperties.has(propertyTitle)) {
        comparedProperties.delete(propertyTitle);
        renderComparisonToolbar();
        return;
    }

    if (comparedProperties.size >= 2) {
        compareStatus.textContent = "Deux biens sont déjà sélectionnés. Retirez-en un avant d’en ajouter un autre.";
        return;
    }

    comparedProperties.add(propertyTitle);
    renderComparisonToolbar();
}

function renderComparisonTable() {
    const selectedProperties = properties.filter(function(property) {
        return comparedProperties.has(property.title);
    });
    const table = document.createElement("table");
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    const rowLabel = document.createElement("th");

    rowLabel.scope = "col";
    rowLabel.textContent = "Caractéristique";
    headRow.appendChild(rowLabel);

    selectedProperties.forEach(function(property) {
        const heading = document.createElement("th");
        const image = document.createElement("img");
        const title = document.createElement("span");
        heading.scope = "col";
        image.src = property.image;
        image.alt = "";
        image.loading = "lazy";
        image.decoding = "async";
        title.textContent = property.title;
        heading.append(image, title);
        headRow.appendChild(heading);
    });

    head.appendChild(headRow);
    table.appendChild(head);

    const rows = [
        { label: "Type de bien", value: function(property) { return property.type; } },
        { label: "Transaction", value: function(property) { return property.transaction; } },
        {
            label: "Disponibilité",
            value: function(property) { return getPropertyAvailabilityLabel(property); }
        },
        {
            label: "Mise à jour",
            value: function(property) { return getPropertyUpdatedLabel(property); }
        },
        {
            label: "Prix",
            value: function(property) {
                return property.transaction === "Location"
                    ? property.price + " (loyer mensuel)"
                    : property.price + " (prix de vente)";
            }
        },
        { label: "Localisation", value: function(property) { return property.location; } },
        { label: "Surface", value: function(property) { return property.surface; } },
        { label: "Chambres", key: "bedrooms" },
        { label: "Salles de bain", key: "bathrooms" },
        { label: "Salons TV", key: "livingRooms" },
        { label: "Cuisines", key: "kitchens" }
    ];
    const body = document.createElement("tbody");

    rows.forEach(function(row) {
        const tableRow = document.createElement("tr");
        const label = document.createElement("th");
        label.scope = "row";
        label.textContent = row.label;
        tableRow.appendChild(label);

        selectedProperties.forEach(function(property) {
            const cell = document.createElement("td");
            if (row.value) {
                cell.textContent = row.value(property) || "Non renseigné";
            } else if (property.type === "Terrain") {
                cell.textContent = "Sans objet";
            } else {
                cell.textContent = property[row.key] === undefined
                    ? "Non renseigné"
                    : String(property[row.key]);
            }
            tableRow.appendChild(cell);
        });

        body.appendChild(tableRow);
    });

    table.appendChild(body);
    comparisonTableContainer.replaceChildren(table);
}

function initializePropertyMap() {
    if (!window.L) {
        mapStatus.textContent = "Carte indisponible. Vérifiez votre connexion Internet.";
        return;
    }

    propertyMap = window.L.map(propertyMapElement).setView([14.7167, -17.4677], 12);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>',
        maxZoom: 19
    }).addTo(propertyMap);
    propertyMapMarkers = window.L.featureGroup().addTo(propertyMap);
}

function renderPropertyMap(propertiesToDisplay) {
    if (!propertyMap || !propertyMapMarkers) {
        return;
    }

    propertyMapMarkers.clearLayers();
    const mapProperties = propertiesToDisplay.filter(function(property) {
        return Array.isArray(property.coordinates) &&
            property.coordinates.length === 2 &&
            property.coordinates.every(Number.isFinite);
    });

    mapProperties.forEach(function(property) {
        const marker = window.L.marker(property.coordinates);
        const popup = document.createElement("div");
        const title = document.createElement("strong");
        const location = document.createElement("p");
        const price = document.createElement("p");
        const availability = document.createElement("p");
        const detailsButton = document.createElement("button");

        title.textContent = property.title;
        location.textContent = property.location + " · repère approximatif";
        price.textContent = property.price + " · " + property.transaction;
        availability.textContent = property.isDemo
            ? "EXEMPLE INDICATIF — prix, photos et disponibilité non contractuels."
            : property.availability + " · mise à jour le " +
                getPropertyUpdatedLabel(property);
        detailsButton.type = "button";
        detailsButton.className = "map-details-btn";
        detailsButton.textContent = "Voir les détails";
        detailsButton.addEventListener("click", function() {
            const cardButton = Array.from(
                propertiesContainer.querySelectorAll(".details-btn")
            ).find(function(button) {
                return button.dataset.title === property.title;
            });

            if (cardButton) {
                cardButton.click();
            } else {
                searchInput.value = property.title;
                updateProperties();
                propertiesContainer.querySelector(".details-btn")?.click();
            }
        });

        popup.append(title, location, price, availability, detailsButton);
        marker.bindPopup(popup);
        propertyMapMarkers.addLayer(marker);
    });

    mapStatus.textContent = mapProperties.length
        ? mapProperties.length + " bien" + (mapProperties.length > 1 ? "s" : "") +
            " affiché" + (mapProperties.length > 1 ? "s" : "")
        : "Aucun bien ne correspond aux filtres sélectionnés.";

    if (mapProperties.length === 1) {
        propertyMap.setView(mapProperties[0].coordinates, 14);
    } else if (mapProperties.length > 1) {
        propertyMap.fitBounds(propertyMapMarkers.getBounds(), { padding: [24, 24] });
    } else {
        propertyMap.setView([14.7167, -17.4677], 12);
    }
}

properties.forEach(function(property) {
    const option = document.createElement("option");
    option.value = property.title;
    option.textContent = property.title;
    contactProperty.appendChild(option);
});

function renderPropertyGallery(property, category) {
    const propertyImages = [
        { image: property.image, label: "Vue extérieure principale" }
    ].concat(property.gallery || []);
    const visibleImages = category
        ? propertyImages.filter(function(photo) {
            return photo.label.startsWith(category + " ");
        })
        : propertyImages;

    modalGallery.replaceChildren();

    if (visibleImages.length === 0) {
        return;
    }

    if (!category) {
        modalImage.loading = "eager";
        modalImage.decoding = "async";
        modalImage.fetchPriority = "high";
        modalImage.src = property.image;
        modalImage.alt = property.title;
    }

    visibleImages.forEach(function(photo, index) {
        const thumbnail = document.createElement("button");
        const thumbnailImage = document.createElement("img");
        const isSelected = index === 0;

        thumbnail.type = "button";
        thumbnail.classList.add("gallery-thumbnail");
        thumbnail.setAttribute("aria-label", "Afficher : " + photo.label);
        thumbnail.setAttribute("aria-pressed", String(isSelected));
        thumbnailImage.loading = isSelected ? "eager" : "lazy";
        thumbnailImage.decoding = "async";
        thumbnailImage.src = photo.image;
        thumbnailImage.alt = "";

        thumbnail.appendChild(thumbnailImage);
        thumbnail.addEventListener("click", function() {
            modalImage.src = photo.image;
            modalImage.alt = property.title + " - " + photo.label;

            modalGallery.querySelectorAll(".gallery-thumbnail").forEach(function(button) {
                button.setAttribute("aria-pressed", String(button === thumbnail));
            });
        });

        modalGallery.appendChild(thumbnail);

        if (isSelected && category) {
            modalImage.src = photo.image;
            modalImage.alt = property.title + " - " + photo.label;
        }
    });
}


// ==================== AFFICHER LES PROPRIÉTÉS ====================

function displayProperties(propertiesToDisplay) {

    propertiesContainer.innerHTML = "";
    resultsCount.textContent = propertiesToDisplay.length === 0
        ? "Aucune annonce ne correspond à votre recherche."
        : propertiesToDisplay.length + " annonce" +
            (propertiesToDisplay.length > 1 ? "s" : "") + " trouvée" +
            (propertiesToDisplay.length > 1 ? "s" : "");

    if (propertiesToDisplay.length === 0) {

        propertiesContainer.innerHTML = `
            <div class="no-result">
                <h3>Aucun bien ne correspond à ces critères</h3>
                <p>Essayez d’élargir votre recherche ou de modifier un ou plusieurs filtres.</p>
                <button class="reset-property-filters" type="button">
                    Effacer tous les filtres
                </button>
            </div>
        `;

        return;
    }


    propertiesToDisplay.forEach(function(property) {
        const isFavorite = favoriteProperties.has(property.title);

        const card = document.createElement("article");

        card.classList.add("property-card");

        card.innerHTML = `
            <img
                src="${property.image}"
                alt="${property.title}"
                loading="lazy"
                decoding="async"
            >

            <div class="property-content">

                <span class="property-type">
                    ${property.type}
                </span>

                <span class="transaction-badge">
                    ${property.transaction}
                </span>

                <span class="availability-badge ${property.isDemo ? "is-example" : "is-available"}">
                    ${getPropertyAvailabilityLabel(property)}
                </span>

                <h3>
                    ${property.title}
                </h3>

                <p>
                    📍 ${property.location}
                </p>

               <strong>
    ${property.price}
</strong>

${property.isDemo ? "" : `<small class="property-updated-date">Mis à jour le ${getPropertyUpdatedLabel(property)}</small>`}

${property.isDemo ? '<small class="demo-listing-label">Exemple indicatif · photos, prix, caractéristiques et disponibilité non contractuels</small>' : ""}

<div class="card-buttons">

   <button class="details-btn" data-title="${property.title}">
    Voir les détails
</button>

    <button class="compare-toggle" type="button" data-title="${property.title}" aria-pressed="false">
        Comparer
    </button>

    <button class="share-property" type="button" data-title="${property.title}">
        Partager
    </button>

    <button class="favorite-btn" type="button" data-title="${property.title}" aria-label="${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}" aria-pressed="${isFavorite}">
        ${isFavorite ? "♥" : "♡"}
    </button>

</div>
            </div>
        `;

        propertiesContainer.appendChild(card);

});

renderComparisonToolbar();
activateDetailButtons();

}


propertiesContainer.addEventListener("click", function(event) {
    if (!event.target.closest(".reset-property-filters")) {
        return;
    }

    searchInput.value = "";
    currentType = "Tous";
    currentFavoritesOnly = false;
    currentTransaction = "Tous";
    currentPriceSort = "featured";
    currentBedroomFilter = "Tous";
    currentBudgetMin = null;
    currentBudgetMax = null;
    transactionFilter.value = currentTransaction;
    priceSort.value = currentPriceSort;
    bedroomFilter.value = currentBedroomFilter;
    budgetMin.value = "";
    budgetMax.value = "";
    priceSort.disabled = true;
    budgetFilter.disabled = true;
    budgetFilterTitle.textContent = "Budget en FCFA";
    budgetFilterHint.textContent =
        "Choisissez Achat ou Location pour filtrer le budget.";
    filterButtons.forEach(function(button) {
        button.classList.toggle("active", button.dataset.type === currentType);
    });
    favoritesFilterButton.classList.remove("active");
    updateFavoritesFilterButton();
    updateProperties();
    searchInput.focus();
});


// ==================== FAVORIS ====================

function updateFavoriteButtons(propertyTitle) {
    const isFavorite = favoriteProperties.has(propertyTitle);
    const favoriteButtons = document.querySelectorAll(".favorite-btn");

    favoriteButtons.forEach(function(button) {
        if (button.dataset.title !== propertyTitle) {
            return;
        }

        button.setAttribute("aria-pressed", String(isFavorite));
        button.setAttribute(
            "aria-label",
            isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"
        );
        button.textContent = button === modalFavorite
            ? (isFavorite ? "♥ Retirer des favoris" : "♡ Ajouter aux favoris")
            : (isFavorite ? "♥" : "♡");
    });

    updateFavoritesFilterButton();
}

function updateFavoritesFilterButton() {
    const favoriteCount = properties.filter(function(property) {
        return favoriteProperties.has(property.title);
    }).length;

    favoritesFilterButton.textContent =
        (currentFavoritesOnly ? "♥ Favoris seulement" : "♡ Favoris") +
        " (" + favoriteCount + ")";
    favoritesFilterButton.setAttribute(
        "aria-pressed",
        String(currentFavoritesOnly)
    );
}

document.addEventListener("click", function(event) {
    const compareButton = event.target.closest(".compare-toggle");
    if (compareButton) {
        toggleComparedProperty(compareButton.dataset.title);
        return;
    }

    const removeComparisonButton = event.target.closest("[data-remove-comparison]");
    if (removeComparisonButton) {
        toggleComparedProperty(removeComparisonButton.dataset.removeComparison);
        return;
    }

    const button = event.target.closest(".favorite-btn");
    if (!button) {
        return;
    }

    const propertyTitle = button.dataset.title;
    if (favoriteProperties.has(propertyTitle)) {
        favoriteProperties.delete(propertyTitle);
    } else {
        favoriteProperties.add(propertyTitle);
    }

    saveFavoriteProperties();
    updateFavoriteButtons(propertyTitle);
    if (currentFavoritesOnly) {
        updateProperties();
    }
});

openComparison.addEventListener("click", function() {
    if (comparedProperties.size !== 2) {
        return;
    }

    renderComparisonTable();
    comparisonModal.hidden = false;
    comparisonModal.classList.add("active");
    closeComparison.focus();
});

function hideComparison() {
    comparisonModal.classList.remove("active");
    comparisonModal.hidden = true;
    openComparison.focus();
}

closeComparison.addEventListener("click", hideComparison);

comparisonModal.addEventListener("click", function(event) {
    if (event.target === comparisonModal) {
        hideComparison();
    }
});

clearComparison.addEventListener("click", function() {
    comparedProperties.clear();
    renderComparisonToolbar();
});

function activateDetailButtons() {

    const detailButtons =
        document.querySelectorAll(".details-btn");


    detailButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const propertyTitle =
                button.dataset.title;


            const property =
                properties.find(function(item) {

                    return item.title === propertyTitle;

                });


            if (!property) {
                return;
            }


            activeModalProperty = property;
            renderPropertyGallery(property);
            modalGalleryFilters.forEach(function(filterButton) {
                const category = filterButton.dataset.galleryCategory;
                const matchingPhotos = (property.gallery || []).filter(function(photo) {
                    return photo.label.startsWith(category + " ");
                });
                const count = category === "Chambre"
                    ? property.bedrooms
                    : category === "Salle de bain"
                        ? property.bathrooms
                        : category === "Salon"
                            ? property.livingRooms
                            : property.kitchens;

                const pluralCategory = category === "Salle de bain"
                    ? "Salles de bain"
                    : category === "Salon"
                        ? "Salons TV"
                        : category + "s";

                filterButton.textContent = count
                    ? pluralCategory + " : " + count
                    : category + " : non renseigné";
                filterButton.disabled = matchingPhotos.length === 0;
                filterButton.setAttribute("aria-pressed", "false");
            });

            modalType.textContent =
                property.type;

            modalTitle.textContent =
                property.title;

            modalLocation.textContent =
                "📍 " + property.location;

            modalAvailability.textContent =
                property.isDemo
                    ? "EXEMPLE INDICATIF — photos, prix, caractéristiques et disponibilité non contractuels."
                    : property.availability + " · mis à jour le " +
                        getPropertyUpdatedLabel(property);

            modalPrice.textContent =
                property.price;

            modalBedrooms.textContent =
                "🛏️ " + property.bedrooms + " chambres";

            modalBathrooms.textContent = property.type === "Terrain"
                ? "🛁 Sans objet"
                : property.bathrooms === null
                    ? "🛁 Salles de bain non renseignées"
                    : "🛁 " + property.bathrooms + " salles de bain";

            modalSurface.textContent =
                "📐 " + property.surface;

            modalDescription.textContent =
                property.description;

            modalContact.href = "#contact";
            modalFavorite.dataset.title = property.title;
            updateFavoriteButtons(property.title);

            propertyModal.classList.add("active");

        });

    });

}

shareModalProperty.addEventListener("click", function() {
    if (activeModalProperty) {
        shareProperty(activeModalProperty.title);
    }
});

document.addEventListener("click", function(event) {
    const shareButton = event.target.closest(".share-property");
    if (shareButton && shareButton !== shareModalProperty) {
        shareProperty(shareButton.dataset.title);
    }
});

modalGalleryFilters.forEach(function(button) {
    button.addEventListener("click", function() {
        if (!activeModalProperty) {
            return;
        }

        const category = button.dataset.galleryCategory;
        renderPropertyGallery(activeModalProperty, category);
        modalGalleryFilters.forEach(function(filterButton) {
            filterButton.setAttribute(
                "aria-pressed",
                String(filterButton === button)
            );
        });
    });
});

closeModal.addEventListener("click", function() {
    propertyModal.classList.remove("active");
});

requestVisitButton.addEventListener("click", function() {
    if (!activeModalProperty) {
        return;
    }

    visitProperty.textContent = activeModalProperty.title;
    visitDateTime.min = getLocalDateTimeValue(new Date());
    visitModal.hidden = false;
    document.querySelector("#visit-name").focus();
});

function closeVisitRequest() {
    visitModal.hidden = true;
    requestVisitButton.focus();
}

closeVisitButton.addEventListener("click", closeVisitRequest);

visitModal.addEventListener("click", function(event) {
    if (event.target === visitModal) {
        closeVisitRequest();
    }
});

propertyModal.addEventListener("click", function(event) {
    if (event.target === propertyModal) {
        propertyModal.classList.remove("active");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        if (!visitModal.hidden) {
            closeVisitRequest();
        } else if (!comparisonModal.hidden) {
            hideComparison();
        } else {
            propertyModal.classList.remove("active");
        }
    }
});

function openSharedProperty() {
    const sharedSlug = new URLSearchParams(window.location.search).get("bien");
    if (!sharedSlug) {
        return;
    }

    const property = properties.find(function(item) {
        return createPropertySlug(item.title) === sharedSlug;
    });
    if (!property) {
        showShareFeedback("Le bien demandé dans ce lien est introuvable.", true);
        return;
    }

    const detailButton = Array.from(
        propertiesContainer.querySelectorAll(".details-btn")
    ).find(function(button) {
        return button.dataset.title === property.title;
    });

    if (detailButton) {
        detailButton.click();
    }
}

modalContact.addEventListener("click", function() {
    if (activeModalProperty) {
        contactProperty.value = activeModalProperty.title;
        contactMessage.value =
            "Bonjour, je souhaite obtenir des informations sur le bien : " +
            activeModalProperty.title + ".";
    }

    propertyModal.classList.remove("active");
});

visitForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!activeModalProperty) {
        throw new Error("Impossible d'envoyer une demande de visite sans bien sélectionné.");
    }

    const formData = new FormData(visitForm);
    const requestedDate = new Date(formData.get("datetime"));
    if (Number.isNaN(requestedDate.getTime()) || requestedDate < new Date()) {
        visitDateTime.setCustomValidity("Choisissez une date et une heure dans le futur.");
        visitDateTime.reportValidity();
        return;
    }

    const message = [
        "Bonjour Dakar Immo,",
        "",
        "Je souhaite demander une visite pour le bien : " + activeModalProperty.title,
        "Date et heure souhaitées : " + requestedDate.toLocaleString("fr-FR", {
            dateStyle: "long",
            timeStyle: "short"
        }),
        "Nom : " + formData.get("name"),
        "Téléphone : " + formData.get("phone"),
        formData.get("note") ? "Précision : " + formData.get("note") : "",
        "",
        "Merci de me confirmer si ce créneau est disponible. Je comprends que cette demande ne réserve pas automatiquement la visite."
    ].filter(Boolean).join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
});

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const message = [
        "Bonjour Dakar Immo,",
        "",
        "Nom : " + formData.get("name"),
        "Téléphone : " + formData.get("phone"),
        "Bien concerné : " + formData.get("property"),
        "",
        formData.get("message")
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
});


// ==================== RECHERCHE + FILTRE ====================

function updateProperties() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const hasNegativeBudget = currentBudgetMin !== null && currentBudgetMin < 0 ||
        currentBudgetMax !== null && currentBudgetMax < 0;
    const hasInvalidBudget = hasNegativeBudget ||
        (currentBudgetMin !== null &&
            currentBudgetMax !== null &&
            currentBudgetMin > currentBudgetMax);
    filterError.textContent = hasInvalidBudget
        ? hasNegativeBudget
            ? "Le budget ne peut pas être négatif."
            : "Le budget minimum ne peut pas dépasser le budget maximum."
        : "";
    filterError.hidden = !hasInvalidBudget;

    const filteredProperties =
        properties.filter(function(property) {

            const matchesSearch =
                property.title.toLowerCase().includes(searchValue) ||
                property.location.toLowerCase().includes(searchValue) ||
                property.type.toLowerCase().includes(searchValue);


            const matchesType =
                currentType === "Tous" ||
                property.type === currentType;

            const matchesFavorites =
                !currentFavoritesOnly ||
                favoriteProperties.has(property.title);

            const matchesTransaction =
                currentTransaction === "Tous" ||
                property.transaction === currentTransaction;

            const matchesBedrooms = currentBedroomFilter === "Tous" ||
                (property.type !== "Terrain" &&
                    (currentBedroomFilter === "5"
                        ? property.bedrooms >= 5
                        : property.bedrooms === Number(currentBedroomFilter)));

            const matchesMinimumBudget = currentBudgetMin === null ||
                property.priceAmount >= currentBudgetMin;

            const matchesMaximumBudget = currentBudgetMax === null ||
                property.priceAmount <= currentBudgetMax;

            return !hasInvalidBudget &&
                matchesSearch &&
                matchesType &&
                matchesFavorites &&
                matchesTransaction &&
                matchesBedrooms &&
                matchesMinimumBudget &&
                matchesMaximumBudget;

        });

    if (currentPriceSort !== "featured") {
        const direction = currentPriceSort === "ascending" ? 1 : -1;
        filteredProperties.sort(function(first, second) {
            return (first.priceAmount - second.priceAmount) * direction;
        });
    }

    displayProperties(filteredProperties);
    renderPropertyMap(filteredProperties);
}


// ==================== BOUTON RECHERCHER ====================

searchBtn.addEventListener("click", function() {

    updateProperties();

});

sendSearchWhatsAppButton.addEventListener("click", function() {
    updateProperties();
    if (!filterError.hidden) {
        filterError.focus();
        return;
    }

    const searchTerm = searchInput.value.trim();
    const criteria = [
        "Recherche : " + (searchTerm || "tous les biens"),
        "Type : " + currentType,
        "Transaction : " + currentTransaction
    ];

    if (currentBedroomFilter !== "Tous") {
        criteria.push(
            "Chambres : " + (currentBedroomFilter === "5"
                ? "5 ou plus"
                : currentBedroomFilter)
        );
    }

    if (currentBudgetMin !== null || currentBudgetMax !== null) {
        const currencyFormatter = new Intl.NumberFormat("fr-FR");
        const minimum = currentBudgetMin === null
            ? "sans minimum"
            : currencyFormatter.format(currentBudgetMin) + " FCFA";
        const maximum = currentBudgetMax === null
            ? "sans maximum"
            : currencyFormatter.format(currentBudgetMax) + " FCFA";
        const budgetDescription = currentTransaction === "Location"
            ? "Loyer mensuel"
            : "Budget d'achat";
        criteria.push(
            budgetDescription + " : " + minimum + " à " + maximum
        );
    }

    const message = [
        "Bonjour Dakar Immo, je recherche un bien immobilier correspondant à ces critères :",
        criteria.join("\n"),
        "",
        "Je comprends que les annonces visibles sur le site sont des exemples indicatifs. Merci de me proposer des biens réels et disponibles correspondant à ma recherche."
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
});


// ==================== FILTRES ====================

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        currentType =
            button.dataset.type;


        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");

        updateProperties();

    });

});

favoritesFilterButton.addEventListener("click", function() {
    currentFavoritesOnly = !currentFavoritesOnly;
    favoritesFilterButton.classList.toggle("active", currentFavoritesOnly);
    updateFavoritesFilterButton();
    updateProperties();
});


// ==================== RECHERCHE EN DIRECT ====================

searchInput.addEventListener("input", function() {

    updateProperties();

});

transactionFilter.addEventListener("change", function() {
    currentTransaction = transactionFilter.value;
    priceSort.disabled = currentTransaction === "Tous";
    budgetFilter.disabled = currentTransaction === "Tous";
    currentBudgetMin = null;
    currentBudgetMax = null;
    budgetMin.value = "";
    budgetMax.value = "";
    if (priceSort.disabled) {
        currentPriceSort = "featured";
        priceSort.value = currentPriceSort;
        budgetFilterTitle.textContent = "Budget en FCFA";
        budgetFilterHint.textContent =
            "Choisissez Achat ou Location pour filtrer le budget.";
    } else {
        const budgetUnit = currentTransaction === "Location"
            ? "Loyer mensuel en FCFA"
            : "Budget d’achat en FCFA";
        budgetFilterTitle.textContent = budgetUnit;
        budgetFilterHint.textContent = currentTransaction === "Location"
            ? "Le budget porte sur le loyer mensuel."
            : "Le budget porte sur le prix de vente.";
    }
    updateProperties();
});

priceSort.addEventListener("change", function() {
    currentPriceSort = priceSort.value;
    updateProperties();
});

bedroomFilter.addEventListener("change", function() {
    currentBedroomFilter = bedroomFilter.value;
    updateProperties();
});

function updateBudgetFilter() {
    currentBudgetMin = budgetMin.value === "" ? null : Number(budgetMin.value);
    currentBudgetMax = budgetMax.value === "" ? null : Number(budgetMax.value);
    updateProperties();
}

budgetMin.addEventListener("input", updateBudgetFilter);
budgetMax.addEventListener("input", updateBudgetFilter);


// ==================== AFFICHAGE INITIAL ====================

priceSort.disabled = true;
budgetFilter.disabled = true;
initializePropertyMap();
updateFavoritesFilterButton();
displayProperties(properties);
renderPropertyMap(properties);
openSharedProperty();
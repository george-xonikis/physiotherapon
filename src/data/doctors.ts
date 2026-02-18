import type { Localized } from "@/i18n/types";

export interface DoctorSection {
  content: Localized<string[]>;
  centered?: boolean;
  list?: boolean;
  headings?: { tag: "h4"; text: Localized<string> }[];
}

export interface Doctor {
  slug: string;
  name: Localized<string>;
  role: Localized<string>;
  pageTitle: string;
  heroVariant: "terzanidis" | "papatheodorou";
  sections: DoctorSection[];
}

export const doctors: Doctor[] = [
  {
    slug: "terzanidis",
    name: {
      gr: "Σταύρος Τερζανίδης",
      en: "Stavros Terzanidis",
    },
    role: {
      gr: "Συνιδιοκτήτης Physiotherapon | Φυσικοθεραπευτής",
      en: "Co-Owner Physiotherapon | Physiotherapist",
    },
    pageTitle: "Σταύρος Τερζανίδης | Physiotherapy",
    heroVariant: "terzanidis",
    sections: [
      {
        content: {
          gr: [
            "Φυσικοθεραπευτής, πτυχιούχος τετραετούς ανώτατης φοίτησης σχολής φυσικοθεραπείας.",
            "Μεγάλη εμπειρία σε παραδοσιακές τεχνικές φυσικοθεραπείας, εξειδίκευση σε μορφές κινησιοθεραπείας και πιστοποίηση στην χρήση νέων τεχνολογιών φυσικοθεραπείας.",
          ],
          en: [
            "Physiotherapist, graduate of a four-year higher education physiotherapy program.",
            "Extensive experience in traditional physiotherapy techniques, specialization in kinesiotherapy forms and certification in the use of new physiotherapy technologies.",
          ],
        },
      },
      {
        centered: true,
        content: {
          gr: [
            "HumanTecar Certified Operator,",
            "θεραπευτική προσέγγιση στις παθήσεις του κάτω άκρου,",
            "International School of Tecar Therapy, Θεσσαλονίκη 2010",
          ],
          en: [
            "HumanTecar Certified Operator,",
            "therapeutic approach to lower limb conditions,",
            "International School of Tecar Therapy, Thessaloniki 2010",
          ],
        },
      },
      {
        list: true,
        content: {
          gr: [
            "Εικοσαετής και ενεργή εμπειρία στην αποκατάσταση αθλητών με άσκηση φυσικοθεραπείας σε απαιτητικά, επαγγελματικά, αθλητικά περιβάλλοντα και αθλητικές ομάδες.",
            "Εξαετής συμμετοχή στο ιατρικό team/φυσικοθεραπευτές Α' Ομάδας ΠΑΕ ΠΑΟΚ",
            "Ενεργή παρουσία στο team φυσικοθεραπείας Τμήματα Υποδομής ΠΑΕ ΠΑΟΚ",
          ],
          en: [
            "Twenty years of active experience in athlete rehabilitation through physiotherapy in demanding professional sports environments and sports teams.",
            "Six-year participation in the medical team/physiotherapists of PAOK FC First Team",
            "Active presence in the physiotherapy team of PAOK FC Youth Academies",
          ],
        },
      },
      {
        centered: true,
        content: {
          gr: [
            "Εμπειρία στην διαμόρφωση αποτελεσματικού πλάνου αποκατάστασης και αποθεραπείας τραυματισμών και άλλων παθήσεων, με ολοκληρωμένη κατάρτιση σε μορφές και τεχνικές κινησιοθεραπείας.",
            "Αναγνωρισμένο από το ΑΤΕΙΘ, Δίπλωμα στην Κινησιοθεραπεία που απονεμήθηκε από την Εθνική Αθλητική Ακαδημία \"Βασίλ Λέβσκι\" Σόφιας Βουλγαρίας",
          ],
          en: [
            "Experience in designing effective rehabilitation and recovery plans for injuries and other conditions, with comprehensive training in kinesiotherapy forms and techniques.",
            "ATEI Thessaloniki-recognized Diploma in Kinesiotherapy awarded by the National Sports Academy \"Vasil Levski\" Sofia, Bulgaria",
          ],
        },
      },
    ],
  },
  {
    slug: "papatheodorou",
    name: {
      gr: "Ευάγγελος Παπαθεοδώρου",
      en: "Evangelos Papatheodorou",
    },
    role: {
      gr: "Συνιδιοκτήτης Physiotherapon | Βοηθός Φυσικοθεραπευτή",
      en: "Co-Owner Physiotherapon | Assistant Physiotherapist",
    },
    pageTitle: "Ευάγγελος Παπαθεοδώρου | Physiotherapy",
    heroVariant: "papatheodorou",
    sections: [
      {
        content: {
          gr: [
            "Υψηλά καταρτισμένος Βοηθός Φυσικοθεραπευτή, με δεκαπενταετή εμπειρία στην αποκατάσταση ασθενών μέσω τεχνικών μάλαξης, θερμικών θεραπειών, κινησιοθεραπείας κα.",
            "Εμπειρία άσκησης β. Φυσικοθεραπείας, αξιολόγησης ασθενών και διαχείρισης προγραμμάτων αποκατάστασής τους, σε διαφορετικά περιβάλλοντα υψηλής πίεσης και απαιτήσεων.",
          ],
          en: [
            "Highly qualified assistant Physiotherapist with fifteen years of experience in patient rehabilitation through massage techniques, thermal therapies, kinesiotherapy and more.",
            "Experience in practicing assistant Physiotherapy, patient assessment and management of rehabilitation programs in various high-pressure and demanding environments.",
          ],
        },
      },
      {
        centered: true,
        content: {
          gr: [
            "424 Γ.Σ.Ν.Θεσσαλονίκης",
            "Κ.ΑΠ.Η Περαίας",
            "Αθλητικές ομάδες",
            "Ορθοπεδικά Ιατρεία",
            "Εργαστήρια Φυσικοθεραπείας",
          ],
          en: [
            "424 Military Hospital of Thessaloniki",
            "Open Care Centre of Peraia",
            "Sports teams",
            "Orthopedic Clinics",
            "Physiotherapy Laboratories",
          ],
        },
      },
      {
        list: true,
        content: {
          gr: [
            "Εξειδίκευση στην διαπροσωπική εργασία με όλες τις ηλικιακές ομάδες, συμπεριλαμβανομένων αθλητών, ηλικιωμένων, διαχείρισης αναπηριών, ΑΜΕΑ & εφήβων!",
            "Διαρκής επιμόρφωση στις τεχνολογίες & τεχνικές φυσικοθεραπείας, τόσο με την παρακολούθηση της τελευταίας επιστημονικής βιβλιογραφίας όσο και με την συμμετοχή σε Συνέδρια Φυσικοθεραπείας & Σεμινάρια.",
          ],
          en: [
            "Specialization in interpersonal work with all age groups, including athletes, the elderly, disability management, people with disabilities & adolescents!",
            "Continuous education in physiotherapy technologies & techniques, through monitoring the latest scientific literature and participation in Physiotherapy Conferences & Seminars.",
          ],
        },
      },
      {
        centered: true,
        headings: [
          {
            tag: "h4",
            text: {
              gr: "Ρευματοπάθειες, Επιγονατιδομηριαίο",
              en: "Rheumatic Diseases, Patellofemoral",
            },
          },
        ],
        content: {
          gr: [
            "Άλγος & Βλάβες του Αρθρικού Χόνδρου του Γόνατος - Διεθνές Επιστημονικό",
            "Συνέδριο Φυσικοθεραπείας",
          ],
          en: [
            "Pain & Damage of Knee Articular Cartilage - International Scientific",
            "Physiotherapy Conference",
          ],
        },
      },
      {
        centered: true,
        headings: [
          {
            tag: "h4",
            text: {
              gr: "Ετήσιο Πανελλήνιο Συνέδριο",
              en: "Annual Panhellenic Conference",
            },
          },
        ],
        content: {
          gr: [
            "Φυσικοθεραπείας, Αναπηρία και Σύγχρονη Φυσικοθεραπευτική Αποκατάσταση",
          ],
          en: [
            "Physiotherapy, Disability and Modern Physiotherapy Rehabilitation",
          ],
        },
      },
      {
        centered: true,
        headings: [
          {
            tag: "h4",
            text: {
              gr: "Σπονδυλολίσθηση και Κήλη",
              en: "Spondylolisthesis and Herniation",
            },
          },
        ],
        content: {
          gr: [
            "Μεσοσπονδύλιου Δίσκου - Επιστημονικό Συνέδριο Θεσσαλονίκης",
          ],
          en: [
            "of Intervertebral Disc - Thessaloniki Scientific Conference",
          ],
        },
      },
      {
        centered: true,
        headings: [
          {
            tag: "h4",
            text: {
              gr: "Πανελλήνιο Συνέδριο Ρευματολογίας",
              en: "Panhellenic Rheumatology Conference",
            },
          },
        ],
        content: { gr: [], en: [] },
      },
      {
        centered: true,
        headings: [
          {
            tag: "h4",
            text: {
              gr: "Βρογχικό Άσθμα - Φυσικοθεραπευτική",
              en: "Bronchial Asthma - Physiotherapy",
            },
          },
        ],
        content: {
          gr: ["Παρέμβαση κα."],
          en: ["Intervention etc."],
        },
      },
    ],
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

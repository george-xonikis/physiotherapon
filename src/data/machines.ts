import type { Localized } from "@/i18n/types";

export interface Machine {
  slug: string;
  title: Localized<string>;
  subtitle?: string;
  pageTitle: string;
  description: Localized<string[]>;
  features?: Localized<string[]>;
  images: string[];
}

export const machines: Machine[] = [
  {
    slug: "tecar",
    title: { gr: "Tecar", en: "Tecar" },
    subtitle: "BACK 3TX WINBACK",
    pageTitle: "Tecar | Physiotherapy",
    description: {
      gr: [
        "Το BACK 3TX WINBACK tecar είναι μια προηγμένη θεραπευτική συσκευή που χρησιμοποιεί τεχνολογία ραδιοσυχνοτήτων για την ενίσχυση της επιδιόρθωσης και επούλωσης των ιστών. Είναι ιδιαίτερα αποτελεσματικό στην ανακούφιση του πόνου και της δυσφορίας στην πλάτη, καθιστώντας το πολύτιμο εργαλείο στη φυσικοθεραπεία. Αυτή η μη επεμβατική συσκευή προάγει επίσης την κυκλοφορία του αίματος στην πληγείσα περιοχή, συμβάλλοντας στη διαδικασία επούλωσης.",
      ],
      en: [
        "The BACK 3TX WINBACK tecar is an advanced therapeutic device that uses radiofrequency technology to enhance tissue repair and healing. It is particularly effective in relieving back pain and discomfort, making it a valuable tool in physiotherapy. This non-invasive device also promotes blood circulation in the affected area, aiding the healing process.",
      ],
    },
    features: {
      gr: [
        "Χρησιμοποιεί τεχνολογία ραδιοσυχνοτήτων.",
        "Ενισχύει την επισκευή και επούλωση των ιστών.",
        "Ανακουφίζει τον πόνο και την ενόχληση στην πλάτη.",
        "Προωθεί την κυκλοφορία του αίματος στην πληγείσα περιοχή.",
        "Μη επεμβατικό και ασφαλές για τους ασθενείς.",
      ],
      en: [
        "Uses radiofrequency technology.",
        "Enhances tissue repair and healing.",
        "Relieves back pain and discomfort.",
        "Promotes blood circulation in the affected area.",
        "Non-invasive and safe for patients.",
      ],
    },
    images: ["/images/machines/tecar.png"],
  },
  {
    slug: "electrotherapy",
    title: { gr: "Ηλεκτροθεραπεία", en: "Electrotherapy" },
    subtitle: "INTELECT MOBILE 2 STIM",
    pageTitle: "Ηλεκτροθεραπεία | Physiotherapy",
    description: {
      gr: [
        "Το INTELECT MOBILE 2 STIM είναι μια φορητή συσκευή ηλεκτρικής διέγερσης που έχει σχεδιαστεί για να βοηθά στη μυϊκή αποκατάσταση και τη διαχείριση του πόνου κατά τη διάρκεια των συνεδριών φυσικοθεραπείας. Η φορητότητα και η ευκολία χρήσης του το καθιστούν μια ευέλικτη επιλογή. Αυτή η συσκευή προσφέρει διάφορους τρόπους διέγερσης και ρυθμιζόμενα επίπεδα έντασης, επιτρέποντας προσαρμοσμένη θεραπεία.",
      ],
      en: [
        "The INTELECT MOBILE 2 STIM is a portable electrical stimulation device designed to assist with muscle recovery and pain management during physiotherapy sessions. Its portability and ease of use make it a versatile choice. This device offers various stimulation modes and adjustable intensity levels, allowing customized therapy.",
      ],
    },
    features: {
      gr: [
        "Φορητό και εύκολο στη χρήση.",
        "Υποστηρίζει την αποκατάσταση των μυών.",
        "Αποτελεσματικό για τη διαχείριση του πόνου.",
        "Προσφέρει διάφορους τρόπους διέγερσης.",
        "Ρυθμιζόμενη ένταση για προσαρμοσμένη θεραπεία.",
      ],
      en: [
        "Portable and easy to use.",
        "Supports muscle recovery.",
        "Effective for pain management.",
        "Offers various stimulation modes.",
        "Adjustable intensity for customized therapy.",
      ],
    },
    images: [
      "/images/machines/electrotherapy.png",
      "/images/machines/electrotherapy2.png",
    ],
  },
  {
    slug: "pressotherapy",
    title: { gr: "Πρεσοθεραπεία", en: "Pressotherapy" },
    subtitle: "AMISTIM",
    pageTitle: "Πρεσοθεραπεία | Physiotherapy",
    description: {
      gr: [
        "Το AMISTIM είναι ένα σύστημα βιοανάδρασης ηλεκτρομυογραφίας (EMG) που παρέχει ανατροφοδότηση σε πραγματικό χρόνο σχετικά με τη μυϊκή δραστηριότητα κατά τη διάρκεια των ασκήσεων. Αυτό το πολύτιμο εργαλείο βοηθά τους ασθενείς να βελτιώσουν τον μυϊκό συντονισμό και τη δέσμευση, καθιστώντας το απαραίτητο μέρος της στοχευμένης αποκατάστασης.",
      ],
      en: [
        "The AMISTIM is an electromyography (EMG) biofeedback system that provides real-time feedback on muscle activity during exercises. This valuable tool helps patients improve muscle coordination and engagement, making it an essential part of targeted rehabilitation.",
      ],
    },
    features: {
      gr: [
        "Παρακολουθεί τη μυϊκή δραστηριότητα σε πραγματικό χρόνο.",
        "Παρέχει οπτική ανατροφοδότηση κατά τη διάρκεια των ασκήσεων.",
        "Ενθαρρύνει τη σωστή μυϊκή εμπλοκή.",
        "Χρήσιμο για τη βελτίωση του συντονισμού των μυών.",
        "Υποστηρίζει στοχευμένη αποκατάσταση.",
      ],
      en: [
        "Monitors muscle activity in real time.",
        "Provides visual feedback during exercises.",
        "Encourages proper muscle engagement.",
        "Useful for improving muscle coordination.",
        "Supports targeted rehabilitation.",
      ],
    },
    images: ["/images/machines/pressotherapy.png"],
  },
  {
    slug: "diathermy",
    title: { gr: "Λάμπα Διαθερμίας", en: "Diathermy Lamp" },
    subtitle: "VERRE",
    pageTitle: "Λάμπα Διαθερμίας | Physiotherapy",
    description: {
      gr: [
        "Η λάμπα VERRE είναι μια εξειδικευμένη λάμπα θερμότητας που εκπέμπει καταπραϋντική υπέρυθρη θερμότητα, διεισδύοντας βαθιά στους μύες. Είναι εξαιρετικά αποτελεσματικό στην ανακούφιση της μυϊκής έντασης και της ακαμψίας, ενισχύοντας τη χαλάρωση κατά τη διάρκεια της θεραπείας και συμπληρώνοντας άλλες φυσικοθεραπείες.",
      ],
      en: [
        "The VERRE lamp is a specialized heat lamp that emits soothing infrared heat, penetrating deep into muscles. It is highly effective in relieving muscle tension and stiffness, promoting relaxation during therapy and complementing other physiotherapy treatments.",
      ],
    },
    features: {
      gr: [
        "Εκπέμπει καταπραϋντική υπέρυθρη θερμότητα.",
        "Διεισδύει βαθιά στους μύες.",
        "Ανακουφίζει από την ένταση και τη δυσκαμψία των μυών.",
        "Ενισχύει τη χαλάρωση κατά τη διάρκεια της θεραπείας.",
        "Συμπληρώνει άλλες φυσικοθεραπείες.",
      ],
      en: [
        "Emits soothing infrared heat.",
        "Penetrates deep into muscles.",
        "Relieves muscle tension and stiffness.",
        "Promotes relaxation during therapy.",
        "Complements other physiotherapy treatments.",
      ],
    },
    images: ["/images/machines/diathermy.png"],
  },
  {
    slug: "ultrasound",
    title: { gr: "Υπέρηχος", en: "Ultrasound" },
    subtitle: "INTELECT MOBILE ULTRASOUND",
    pageTitle: "Υπέρηχος | Physiotherapy",
    description: {
      gr: [
        "Το INTELECT MOBILE ULTRASOUND παρέχει θεραπευτικά κύματα υπερήχων που στοχεύουν σε βαθύ ιστό για επούλωση. Είναι μια εξαιρετική επιλογή για τη μείωση της φλεγμονής, το πρήξιμο και την επιτάχυνση της αποκατάστασης των ιστών. Οι ασθενείς εκτιμούν τη μη επεμβατική και ανώδυνη φύση του.",
      ],
      en: [
        "The INTELECT MOBILE ULTRASOUND delivers therapeutic ultrasound waves that target deep tissue for healing. It is an excellent choice for reducing inflammation, swelling and accelerating tissue recovery. Patients appreciate its non-invasive and painless nature.",
      ],
    },
    features: {
      gr: [
        "Παρέχει θεραπευτικά υπερηχητικά κύματα.",
        "Στοχεύει σε βαθύ ιστό για επούλωση.",
        "Μειώνει τη φλεγμονή και το πρήξιμο.",
        "Επιταχύνει την αποκατάσταση των ιστών.",
        "Μη επεμβατική και ανώδυνη.",
      ],
      en: [
        "Delivers therapeutic ultrasound waves.",
        "Targets deep tissue for healing.",
        "Reduces inflammation and swelling.",
        "Accelerates tissue recovery.",
        "Non-invasive and painless.",
      ],
    },
    images: ["/images/machines/ultrasound.png"],
  },
  {
    slug: "laser",
    title: { gr: "Laser", en: "Laser" },
    subtitle: "LASER LA500 ITECH",
    pageTitle: "Laser | Physiotherapy",
    description: {
      gr: [
        "Το LASER LA500 ITECH είναι ένα προηγμένο σύστημα λέιζερ σχεδιασμένο για ακρίβεια και αποτελεσματικότητα σε βιομηχανικές εφαρμογές. Διαπρέπει στην παροχή ακτίνων λέιζερ υψηλής ακρίβειας, απαραίτητες για περίπλοκες εργασίες κατασκευής, ιατρικές διαδικασίες και λεπτομερή ερευνητικά πειράματα.",
      ],
      en: [
        "The LASER LA500 ITECH is an advanced laser system designed for precision and efficiency. It excels at delivering high-precision laser beams essential for intricate procedures, medical treatments and detailed research applications.",
      ],
    },
    features: {
      gr: [
        "Τεχνολογία λέιζερ υψηλής ακρίβειας για λεπτομερείς εφαρμογές.",
        "Στιβαρή κατασκευή κατάλληλη για βιομηχανικά περιβάλλοντα.",
        "Προηγμένος έλεγχος ισχύος και σταθερότητα για σταθερά αποτελέσματα.",
        "Ενσωματωμένα συστήματα ψύξης για συνεχή λειτουργία.",
        "Φιλική προς τον χρήστη διεπαφή με ενσωμάτωση λογισμικού για ευκολία στη χρήση.",
        "Ενεργειακά αποδοτική και χαμηλή συντήρηση, εξασφαλίζοντας οικονομική αποδοτικότητα.",
      ],
      en: [
        "High-precision laser technology for detailed applications.",
        "Robust construction suitable for clinical environments.",
        "Advanced power control and stability for consistent results.",
        "Integrated cooling systems for continuous operation.",
        "User-friendly interface with software integration for ease of use.",
        "Energy-efficient and low maintenance, ensuring cost-effectiveness.",
      ],
    },
    images: ["/images/machines/lazer.png"],
  },
  {
    slug: "aquilo",
    title: { gr: "Aquilo", en: "Aquilo" },
    subtitle: undefined,
    pageTitle: "Aquilo | Physiotherapy",
    description: {
      gr: [
        "Το Aquilo είναι μια μοναδική, φορητή και αποδεδειγμένα αποτελεσματική συσκευή αποθεραπείας που συνδυάζει τα πλεονεκτήματα της κρυοθεραπείας με αυτά της πρεσσοθεραπείας, σε μια συσκευή. Χρησιμοποιώντας μόνο πάγο και νερό, το Aquilo προσφέρει τη βέλτιστη θερμοκρασία και συμπίεση για ολόκληρο το κάτω μέρος του σώματος, ταυτόχρονα, από το ισχίο μέχρι το πέλμα.",
        "Είναι σχεδιασμένο για καθημερινή χρήση, στοχεύοντας σε πιο γρήγορη αποθεραπεία και στην αποφυγή τραυματισμών. Είναι σχεδιασμένο έτσι, ώστε να μεταφέρεται εύκολα.",
      ],
      en: [
        "The Aquilo is a unique, portable and proven effective recovery device that combines the benefits of cryotherapy with those of pressotherapy in a single device. Using only ice and water, the Aquilo delivers optimal temperature and compression for the entire lower body simultaneously, from hip to sole.",
        "It is designed for daily use, targeting faster recovery and injury prevention. It is designed to be easily transported.",
      ],
    },
    features: undefined,
    images: ["/images/machines/aquilo_new.png"],
  },
];

export function getMachineBySlug(slug: string): Machine | undefined {
  return machines.find((m) => m.slug === slug);
}

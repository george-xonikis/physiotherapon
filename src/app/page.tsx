import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/GoogleMap";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { machines } from "@/data/machines";

export default function HomePage() {
  return (
    <main>
      <HeroSection variant="home" />

      {/* Why Us Section */}
      <section id="why-us" className="relative z-10 py-15 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Why Choose */}
            <div className="p-8 bg-gray-main rounded text-white flex flex-col">
              <h3 className="font-bold text-[34px] font-heading mb-6">
                Γιατί να επιλέξετε το Physiotherapon;
              </h3>
              <p className="mb-4">
                Στην <strong>καρδιά της Θεσσαλονίκης</strong>, το
                Physiotherapon αποτελεί μία πρωτοποριακή επιλογή στον τομέα
                της φυσικοθεραπείας και κινησιοθεραπείας.
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 text-sm">
                <li>Πλήρως εξοπλισμένες αίθουσες</li>
                <li>Σύγχρονα μηχανήματα τελευταίας τεχνολογίας</li>
                <li>Ολιστική προσέγγιση στην αποκατάσταση</li>
              </ul>
            </div>

            {/* Doctor 1 */}
            <div className="text-center rounded-xl bg-white shadow-[0px_2px_15px_rgba(0,0,0,0.1)] p-8 flex flex-col">
              <Image
                src="/images/doctors/terzanidis.png"
                alt="ΣΤΑΥΡΟΣ ΤΕΡΖΑΝΙΔΗΣ"
                width={87}
                height={87}
                className="mx-auto my-4 aspect-square object-cover"
              />
              <h4 className="text-xl font-bold mb-4 font-heading">
                ΣΤΑΥΡΟΣ <br /> ΤΕΡΖΑΝΙΔΗΣ
              </h4>
              <div className="text-[15px] text-start flex-1">
                <p className="mb-2">
                  Φυσικοθεραπευτής, πτυχιούχος ανώτατης εκπαίδευσης
                  φυσικοθεραπείας.
                </p>
                <p className="mb-2 font-semibold">Εξειδίκευση:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Αθλητική αποκατάσταση</li>
                  <li>Νέες τεχνολογίες φυσικοθεραπείας</li>
                  <li>Κινησιοθεραπεία</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">
                  20 χρόνια εμπειρίας — ΠΑΕ ΠΑΟΚ
                </p>
              </div>
              <Link
                href="/doctors/terzanidis"
                className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-full transition-colors duration-300 hover:bg-oil"
              >
                Περισσότερα
              </Link>
            </div>

            {/* Doctor 2 */}
            <div className="text-center rounded-xl bg-white shadow-[0px_2px_15px_rgba(0,0,0,0.1)] p-8 flex flex-col">
              <Image
                src="/images/doctors/papatheodorou.png"
                alt="ΕΥΑΓΓΕΛΟΣ ΠΑΠΑΘΕΟΔΩΡΟΥ"
                width={87}
                height={87}
                className="mx-auto my-4 aspect-square object-cover"
              />
              <h4 className="text-xl font-bold mb-4 font-heading">
                ΕΥΑΓΓΕΛΟΣ <br /> ΠΑΠΑΘΕΟΔΩΡΟΥ
              </h4>
              <div className="text-[15px] text-start flex-1">
                <p className="mb-2">
                  Υψηλά καταρτισμένος β.Φυσικοθεραπευτής με δεκαπενταετή
                  εμπειρία.
                </p>
                <p className="mb-2 font-semibold">Εμπειρία σε:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>424 Γ.Σ.Ν. Θεσσαλονίκης</li>
                  <li>Κ.ΑΠ.Η, Ορθοπεδικά Ιατρεία</li>
                  <li>Εργαστήρια Φυσικοθεραπείας</li>
                </ul>
                <p className="mt-2 text-sm text-gray-500">
                  Όλες οι ηλικιακές ομάδες, αθλητές &amp; ΑΜΕΑ
                </p>
              </div>
              <Link
                href="/doctors/papatheodorou"
                className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-full transition-colors duration-300 hover:bg-oil"
              >
                Περισσότερα
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-15 overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 relative min-h-[500px]">
              <Image
                src="/images/about.webp"
                alt="Physiotherapon χώρος"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col items-stretch justify-center py-10 px-6 lg:px-12">
              <h3 className="text-white font-bold font-heading text-[28px] mb-4">
                Σχετικά με το Physiotherapon
              </h3>
              <p className="text-white mb-2">
                Η ιστορία μας ξεκίνησε το <strong>καλοκαίρι του 2023</strong>,
                όταν ο <strong>Σταύρος Τερζανίδης</strong> (Φυσικοθεραπευτής)
                και ο <strong>Βαγγέλης Παπαθεοδώρου</strong> (β.
                Φυσικοθεραπευτής) αποφάσισαν να ενώσουν δυνάμεις.
              </p>
              <p className="text-white/80 text-xl italic mb-4">
                physiotherapy + θεράπων = <strong className="text-white">Physiotherapon</strong>
              </p>

              <div className="mt-8 flex items-start p-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full shrink-0">
                  <Image
                    src="/images/icons/stretchIcon.png"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-white text-[15px] ml-4">
                  <p className="font-semibold mb-1">Ο χώρος μας</p>
                  <p className="text-white/80">
                    Νέο φυσικοθεραπευτήριο στη Θεσσαλονίκη με πλήρως
                    εξοπλισμένες αίθουσες, σύγχρονα μηχανήματα και εργαλεία
                    αποκατάστασης &amp; κινησιοθεραπείας.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start p-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full shrink-0">
                  <Image
                    src="/images/icons/runIcon.png"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-white text-[15px] ml-4">
                  <p className="font-semibold mb-1">Τι προσφέρουμε</p>
                  <ul className="list-disc list-inside space-y-0.5 text-white/80">
                    <li>Φυσικοθεραπεία για αθλητές</li>
                    <li>Αποκατάσταση τραυματισμών</li>
                    <li>Φυσικοθεραπεία αναπηριών</li>
                    <li>Κινησιοθεραπεία</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex items-start p-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full shrink-0">
                  <Image
                    src="/images/icons/physIcon.png"
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-white text-[15px] ml-4">
                  <p className="font-semibold mb-1">Το όραμά μας</p>
                  <p className="text-white/80">Φυσικοθεραπεία για <strong className="text-white">όλους</strong>!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        id="quote"
        className="py-15 overflow-hidden flex justify-center items-center flex-col min-h-[200px] text-center"
      >
        <h3 className="w-[80%] mx-auto text-white text-lg font-normal leading-6 font-heading">
          Ελάτε να δυναμώσουμε το σώμα σας, χαράσσοντας το ιδανικό για τις
          ανάγκες σας πλάνο θεραπείας και αποκατάστασης, μέσα από τις σύγχρονες
          τεχνολογίες φυσικοθεραπείας αλλά και τις τελευταίες τεχνικές
          κινησιοθεραπείας!
        </h3>
        <p className="w-[80%] mx-auto text-white mt-4">
          Σ.Τερζανίδης - Β. Παπαθεοδώρου
        </p>
      </section>

      {/* Therapies Section */}
      <section
        id="therapies"
        className="relative py-15 overflow-hidden min-h-[700px]"
      >
        <Image
          src="/images/therapiesBg.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(8,33,33,0.5)]" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title="Θεραπείες">
            <p>
              Η κακή στάση του σώματος, η καθιστική ζωή, ο πρωταθλητισμός, η
              παράλυση, ένα ατύχημα, μία ασθένεια εκ γενετής, ο πόνος εν
              γένει — πολλοί είναι οι λόγοι που μπορεί να σας οδηγήσουν στην
              πόρτα του φυσικοθεραπευτή.
            </p>
          </SectionTitle>

          <div className="w-[85%] mx-auto my-4 bg-green-main p-4 text-start rounded-[5px]">
            <p className="text-white text-base font-medium leading-6">
              Πιστεύουμε πως η λήψη <b>καλού ιστορικού</b>, σε συνδυασμό με
              τις <b>πρόσφατες εξετάσεις</b> σας και σε{" "}
              <b>συνεργασία με τον ορθοπεδικό σας</b>, είναι απαραίτητα βήματα
              για το καλύτερο πλάνο αποθεραπείας και αποκατάστασης.
            </p>
          </div>

          <div className="w-[85%] mx-auto my-4 bg-green-main p-4 text-start rounded-[5px]">
            <p className="text-white text-base font-medium leading-6">
              Στο <b>Physiotherapon</b>, με εμπειρία σε απαιτητικά πεδία
              φυσικοθεραπείας — όπως νοσοκομεία και αθλητικές
              ομάδες — στοχεύουμε μαζί σας σε μία καθημερινότητα{" "}
              <b>λειτουργική, αυτόνομη και χωρίς πόνο</b>.
            </p>
          </div>

          <div className="w-[85%] mx-auto my-4 bg-green-main p-4 text-start rounded-[5px]">
            <p className="text-white text-base font-medium leading-6 mb-3">
              Επικοινωνήστε μαζί μας μεταξύ άλλων για:
            </p>
            <ul className="text-white text-base font-medium leading-7 list-disc list-inside space-y-1">
              <li>Αποκατάσταση μηνίσκου</li>
              <li>Αποκατάσταση πρόσθιου και οπίσθιου χιαστού συνδέσμου</li>
              <li>Αποκατάσταση αρθροπλαστικής γόνατος και ισχίου</li>
              <li>Αποκατάσταση τραυματισμών ώμου, μέσης, αυχένα</li>
              <li>Βελτιστοποίηση εύρους κίνησης αρθρώσεων</li>
            </ul>
            <p className="text-white text-base font-medium leading-6 mt-3">
              ...και για οποιαδήποτε άλλη ανάγκη φυσικοθεραπείας και
              κινησιοθεραπείας.
            </p>
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section
        id="services"
        className="relative py-15 overflow-hidden min-h-[700px] mt-12"
      >
        <Image
          src="/images/machines.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(8,33,33,0.5)]" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title="Τα Μηχανήματα" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <div key={machine.slug} className="flex items-stretch">
                <div className="w-full min-h-[300px] text-center border border-[#d5e1ed] p-5 bg-green-main transition-all duration-300 flex justify-center items-center flex-col group hover:bg-gray-main hover:border-green-main">
                  <div className="mx-auto w-16 h-16 bg-gray-main rounded-[5px] transition-all duration-300 flex items-center justify-center mb-5 relative z-[2] group-hover:bg-white before:absolute before:content-[''] before:left-[-8px] before:top-[-8px] before:h-full before:w-full before:bg-[rgba(14,62,62,0.53)] before:rounded-[5px] before:transition-all before:duration-300 before:-z-10 group-hover:before:bg-[rgba(255,255,255,0.3)]" />
                  <h4 className="font-bold mb-4 text-2xl font-heading">
                    <Link
                      href={`/machines/${machine.slug}`}
                      className="text-white"
                    >
                      {machine.title}
                    </Link>
                  </h4>
                  {machine.subtitle && (
                    <p className="leading-6 text-sm text-white mb-0">
                      {machine.subtitle}
                    </p>
                  )}
                  <Link
                    href={`/machines/${machine.slug}`}
                    className="inline-block mt-4 px-4 py-2 text-black bg-white rounded-full transition-colors duration-300 hover:bg-oil hover:text-white"
                  >
                    Περισσότερα
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kinesiotherapy Section */}
      <section id="kinisiotherapy" className="py-8 overflow-hidden text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/kinisiotherapy.webp"
                alt="Κινησιοθεραπεία"
                width={600}
                height={400}
                className="w-[90%] mx-auto"
              />
            </div>
            <div>
              <h3 className="font-bold font-heading text-2xl mb-4">
                Κινησιοθεραπεία
              </h3>
              <p className="mb-4">
                Στο <strong>Physiotherapon</strong>, πιστεύουμε πως η δυναμική
                των σύγχρονων τεχνολογιών στη φυσικοθεραπεία λειτουργεί μόνο
                όταν συνδυάζεται με την κινησιοθεραπεία.
              </p>
              <p>
                Με το κατάλληλο πρόγραμμα και
                ασκησιολόγιο — βασισμένο στις ανάγκες της πάθησής
                σας — φτάνουμε μαζί, αποτελεσματικά, στον στόχο σας. Όλα υπό
                την επίβλεψη των φυσικοθεραπευτών, στο ειδικά εξοπλισμένο
                γυμναστήριο του Physiotherapon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-15 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle title="Ο Χώρος Μας">
            <p className="mb-4">
              Ανακαλύψτε τον μοντέρνο χώρο του
              Physiotherapon — τέσσερις πλήρως εξοπλισμένες αίθουσες
              φυσικοθεραπείας και ένα ευρύχωρο γυμναστήριο κινησιοθεραπείας.
            </p>
            <p className="mb-4">
              Άπλετο φυσικό φως, φιλικό περιβάλλον, μίνιμαλ αισθητική και
              επιλεγμένες μουσικές — το ιδανικό πεδίο τόσο για τους ασθενείς
              όσο και για τους φυσικοθεραπευτές.
            </p>
            <p>
              Κάθε επίσκεψη γίνεται με χαρά, και η φυσικοθεραπεία ασκείται
              αποτελεσματικά — χάρη στην εξειδίκευση των φυσικοθεραπευτών και
              τη συνεργασία με τον ίδιο τον ασθενή.
            </p>
          </SectionTitle>
        </div>
        <div className="w-full">
          <Gallery />
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-15 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionTitle title="Οι Φυσικοθεραπευτές" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Terzanidis */}
            <div className="relative shadow-[0px_2px_15px_rgba(44,73,100,0.08)] p-8 text-center rounded-xl group">
              <div className="overflow-hidden block w-[140px] aspect-square mx-auto my-4 rounded-full">
                <Image
                  src="/images/doctors/terzanidis_big.png"
                  alt="ΣΤΑΥΡΟΣ ΤΕΡΖΑΝΙΔΗΣ"
                  width={140}
                  height={140}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="pl-8">
                <h4 className="font-bold mb-1 text-xl text-white font-heading">
                  ΣΤΑΥΡΟΣ ΤΕΡΖΑΝΙΔΗΣ
                </h4>
                <span className="block text-[15px] pb-2.5 relative font-medium text-white/60 after:content-[''] after:absolute after:block after:w-[50px] after:h-px after:bg-[#b2c8dd] after:bottom-0 after:left-0">
                  Co-Owner Physiotherapon | Φυσικοθεραπευτής
                </span>
                <div className="mt-2.5 text-sm text-white text-start min-h-[180px]">
                  <p className="italic mb-2">
                    ❝Το Physiotherapon είναι το επιστέγασμα 20 χρόνων εμπειρίας
                    — μια φυσική εξέλιξη σε όλο αυτό που ονομάζουμε
                    φυσικοθεραπεία.
                  </p>
                  <p className="mb-2">
                    Δημιουργήσαμε τις κατάλληλες συνθήκες ώστε να μπορούν
                    <strong> όλοι</strong> ανεξαιρέτως να φορτίσουν ξανά το
                    σώμα τους αποτελεσματικά:
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 mb-2 text-white/80">
                    <li>Αθλητές που χρειάζονται αποκατάσταση</li>
                    <li>Ηλικιωμένοι που θέλουν να επανέλθουν μετά από ατύχημα</li>
                    <li>Έφηβοι με μυοσκελετικές παθήσεις</li>
                  </ul>
                  <p className="italic">...και όχι μόνο!❞</p>
                </div>
                <Link
                  href="/doctors/terzanidis"
                  className="inline-block mt-4 px-4 py-2 text-black bg-white rounded-full transition-colors duration-300 hover:bg-oil hover:text-white"
                >
                  Βιογραφικό
                </Link>
              </div>
            </div>

            {/* Papatheodorou */}
            <div className="relative shadow-[0px_2px_15px_rgba(44,73,100,0.08)] p-8 text-center rounded-xl group">
              <div className="overflow-hidden block w-[140px] aspect-square mx-auto my-4 rounded-full">
                <Image
                  src="/images/doctors/papatheodorou_big.png"
                  alt="ΕΥΑΓΓΕΛΟΣ ΠΑΠΑΘΕΟΔΩΡΟΥ"
                  width={140}
                  height={140}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="pl-8">
                <h4 className="font-bold mb-1 text-xl text-white font-heading">
                  ΕΥΑΓΓΕΛΟΣ ΠΑΠΑΘΕΟΔΩΡΟΥ
                </h4>
                <span className="block text-[15px] pb-2.5 relative font-medium text-white/60 after:content-[''] after:absolute after:block after:w-[50px] after:h-px after:bg-[#b2c8dd] after:bottom-0 after:left-0">
                  Co-Owner Physiotherapon | β.Φυσικοθεραπευτής
                </span>
                <div className="mt-2.5 text-sm text-white text-start min-h-[180px]">
                  <p className="italic mb-2">
                    ❝Στο Physiotherapon συγκεντρώσαμε όλη την εμπειρία, τις
                    γνώσεις και το πάθος μας για τη Φυσικοθεραπεία.
                  </p>
                  <p className="mb-2">
                    Φτιάξαμε από το μηδέν ένα υπερσύγχρονο φυσικοθεραπευτήριο
                    στη Θεσσαλονίκη, με ουσιαστικό ενδιαφέρον για κάθε ασθενή
                    ξεχωριστά.
                  </p>
                  <p className="mb-2">
                    Στόχος μας: με το καταλληλότερο πρόγραμμα θεραπειών,
                    αποκατάστασης &amp; κινησιοθεραπείας, κάθε ασθενής να
                    επιστρέψει <strong>αποτελεσματικά &amp; δυναμικά</strong>{" "}
                    στη δική του, μοναδική, καθημερινότητα!❞
                  </p>
                </div>
                <Link
                  href="/doctors/papatheodorou"
                  className="inline-block mt-4 px-4 py-2 text-black bg-white rounded-full transition-colors duration-300 hover:bg-oil hover:text-white"
                >
                  Βιογραφικό
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Team background image */}
        <div className="relative min-h-[600px]">
          <Image
            src="/images/teamBg.webp"
            alt="Team Physiotherapon"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(8,33,33,0.07)]" />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-15 overflow-hidden text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold font-heading text-2xl mb-4">
                Το Σημείο
              </h3>
              <p className="mb-4">
                Το Physiotherapon είναι τo νέο, σύγχρονο φυσικοθεραπευτήριο στη
                Θεσσαλονίκη. Στον πρώτο όροφο της{" "}
                <strong>Παπάφη 125</strong>, με εύκολη πρόσβαση στην Κάτω
                Τούμπα.
              </p>

              <p className="mb-2 font-semibold">Συγκοινωνία:</p>
              <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                <li>ΟΑΣΘ 12 ΚΤΕΛ – ΚΑΤΩ ΤΟΥΜΠΑ → Στάση: ΚΛΕΑΝΘΟΥΣ</li>
                <li>ΟΑΣΘ 11 Ν.Σ.ΣΤΑΘΜΟΣ ΠΥΛΑΙΑ → Στάση: ΟΤΕ</li>
              </ul>
              <p className="mb-4 text-sm">
                Ευκολία προσωρινής στάθμευσης στη γύρω περιοχή.
              </p>

              <p className="mb-2 font-semibold">Προσβασιμότητα:</p>
              <p className="text-sm">
                Ράμπα εισόδου, μεγάλο ασανσέρ και ειδικά διαμορφωμένοι χώροι
                — πλήρης προσβασιμότητα για όλους, συμπεριλαμβανομένων
                ηλικιωμένων και ΑΜΕΑ.
              </p>
            </div>
            <div>
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-15 overflow-hidden min-h-[600px]"
      >
        <Image
          src="/images/contactBg.webp"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgba(8,33,33,0.5)]" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title="Επικοινωνία" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
            <div>
              <ContactInfo />
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}

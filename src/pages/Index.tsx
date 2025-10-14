import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExpandableSection } from "@/components/ExpandableSection";
import {
  Settings,
  Globe,
  Laptop,
  Bot,
  TrendingUp,
  Building2,
  Sparkles,
  Rocket,
} from "lucide-react";

const floatingQuotes = [
  "El software no reemplaza a las personas, las amplifica.",
  "La inteligencia artificial es el nuevo colega, no la competencia.",
  "El futuro del trabajo es colaborativo: humanos e IA juntos.",
  "La tecnología que piensa contigo, no por ti.",
];

const sections = [
  {
    icon: Settings,
    title: "El cambio de era",
    visible: [
      "El software ya no complementa el trabajo humano.",
      "Ahora lo ejecuta. Las herramientas se convirtieron en colaboradores.",
      "Los procesos digitales piensan, conversan y actúan.",
    ],
    expanded: [
      "Durante décadas el software fue una herramienta pasiva. Dependía de que alguien lo usara para producir valor.",
      "Pero la inteligencia artificial marcó un cambio irreversible: el software ahora entiende, decide y actúa.",
      "Ya no 'ayudamos al sistema', sino que el sistema trabaja con nosotros.",
      "El concepto de empleo empieza a transformarse: los humanos se vuelven estrategas, no operadores.",
    ],
  },
  {
    icon: Globe,
    title: "El nuevo mercado laboral",
    visible: [
      "El trabajo y el software están fusionándose.",
      "Por primera vez, la tecnología forma parte activa de la fuerza laboral.",
    ],
    expanded: [
      "Por primera vez en la historia, la fuerza laboral humana y la digital colaboran en el mismo espacio.",
      "No hablamos solo de automatizar tareas: hablamos de crear una nueva clase de trabajador — uno que no duerme, no se cansa y aprende de cada interacción.",
      "Las empresas que entiendan esta fusión temprano tendrán una ventaja estructural: escalarán sin límites humanos.",
      "La IA no reemplaza a las personas; las personas que usan IA reemplazarán a quienes no lo hagan.",
    ],
  },
  {
    icon: Laptop,
    title: "De SaaS a 'Servicio como Software'",
    visible: [
      "Ya no pagamos por usar software.",
      "Pagamos por resultados.",
      "El software es el servicio.",
    ],
    expanded: [
      "Antes, el software era una herramienta que necesitaba operadores humanos.",
      "Ahora, el software es el operador, puede actuar solo.",
      "No compramos acceso a una plataforma, compramos un resultado continuo, ejecutado por agentes inteligentes.",
      "Este cambio redefine la economía digital: las empresas ya no venden 'software que ayuda', venden servicios que funcionan solos.",
      "Es el salto de la herramienta al trabajador.",
    ],
  },
  {
    icon: Bot,
    title: "Dos caminos hacia la fuerza laboral de IA",
    visible: [
      "Dos formas de integrar trabajadores de IA:",
      "1️⃣ Colegas internos que colaboran contigo.",
      "2️⃣ Servicios externos que operan 24/7.",
    ],
    expanded: [
      "El primer camino son los colegas de IA: copilotos digitales que aumentan la capacidad de los equipos humanos.",
      "El segundo camino son los servicios de IA: empresas completas construidas sobre agentes autónomos, que automaizan los procesos de principio a fin.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Impacto económico",
    visible: [
      "Los márgenes se están reescribiendo.",
      "Los servicios con IA operan con rentabilidad de software.",
    ],
    expanded: [
      "Un agente de AI puede valer una fracción para una función de lo que puede valer un humano es decir que los márgenes del negocio se disparan.",
      "Esto no solo genera empresas más rentables, sino más accesibles: el conocimiento, que antes dependía de expertos escasos, ahora se empaqueta en procesos automatizados.",
      "La IA no elimina empleos, redistribuye valor y multiplica la productividad.",
    ],
  },
  {
    icon: Building2,
    title: "Dónde dominarán primero los trabajadores de IA",
    visible: [
      "Salud, educación, servicio al cliente y construcción ya viven este cambio.",
      "La IA prospera donde el trabajo es repetitivo o el talento escasea.",
    ],
    expanded: [
      "La IA prospera donde el trabajo es repetitivo, el talento escaso y los datos abundan.",
      "Por eso los primeros sectores en transformarse serán salud, educación, servicio al cliente, contabilidad.",
      "Ejemplo: un agente puede responder 10.000 preguntas de tutores en el tiempo que un humano atiende 10.",
      "La clave no está en reemplazar a las personas, sino en amplificar lo que pueden lograr.",
      "Cada industria vivirá esta transición de forma distinta, pero inevitable.",
    ],
  },
  {
    icon: Sparkles,
    title: "El futuro cercano: Software con alma",
    visible: [
      "Un gran servicio no solo es eficiente.",
      "Es humano.",
      "El alma será la nueva interfaz.",
    ],
    expanded: [
      "La automatización sin empatía fracasa.",
      "El próximo salto no será técnico, será emocional: sistemas que entienden contexto, tono y estado del usuario.",
      "El 'software con alma' no busca eficiencia mecánica, sino conexión humana.",
      "Cuando una clínica, o una empresa logra que su IA se sienta humana, descubren que la tecnología no reemplaza la calidez: la escala.",
    ],
  },
  {
    icon: Rocket,
    title: "Oportunidad para las pymes",
    visible: [
      "Las pequeñas empresas ahora tienen poder de escala.",
      "Con IA pueden competir como grandes corporaciones.",
    ],
    expanded: [
      "Durante años, la innovación fue privilegio de las grandes empresas.",
      "La IA cambió eso: hoy una clínica pequeña puede operar con la misma capacidad analítica de una multinacional.",
      "Los agentes inteligentes democratizan la escala: automatizan tareas, analizan datos, generan contenido y aprenden de cada interacción.",
      "La diferencia ya no será el tamaño del equipo, sino la inteligencia con la que se opera.",
    ],
  },
];

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionsRef.current?.querySelectorAll("section");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen w-full relative">
      {/* Animated Background */}
      <div
        className="animated-bg"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

            {/* Floating Particles */}
            <div className="particles">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${6 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div
            className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in parallax-layer"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <div className="flex justify-center mb-8">
              <Bot className="w-20 h-20 text-primary glow-icon animate-glow" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold glow-text leading-tight">
              La fuerza laboral
              <br />
              de IA ya está aquí
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Del software como servicio al servicio como software.
              <br />
              Una nueva era donde la IA no asiste: trabaja.
            </p>

            <div className="pt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all animate-glow"
                onClick={() =>
                  document
                    .getElementById("content")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Descubrir más
              </Button>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div
          id="content"
          ref={sectionsRef}
          className="max-w-6xl mx-auto px-6 py-20 space-y-12 relative"
        >
          {sections.map((section, index) => (
            <div key={index} className="relative">
              {/* Section Divider with sweep effect */}
              {index > 0 && <div className="section-divider my-8" />}

              {/* Floating Quote */}
              {index % 2 === 0 && index > 0 && (
                <div className="floating-quote" style={{ top: "-40px" }}>
                  "
                  {
                    floatingQuotes[
                      Math.floor(index / 2) % floatingQuotes.length
                    ]
                  }
                  "
                </div>
              )}

              <ExpandableSection
                icon={section.icon}
                title={section.title}
                visibleContent={section.visible}
                expandedContent={section.expanded}
                index={index}
              />
            </div>
          ))}

          {/* CTA Section - Final with closing transition */}
          <div className="section-divider my-12" />

          <section className="glass-card rounded-2xl p-12 md:p-16 text-center space-y-8 animate-fade-in-up mt-16 relative overflow-hidden">
            {/* Closing effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center glow-icon">
                  <Sparkles
                    className="w-8 h-8 text-primary animate-glow"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold glow-text">
                Conoce a tus nuevos colegas de IA
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                La revolución ya empezó.
                <br />
                ¿Tu empresa será espectadora o protagonista?
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className=""
                  onClick={() =>
                    window.open("https://hubu.com.co?modal=true", "_blank")
                  }
                >
                  RESERVAR UNA DEMOSTRACIÓN
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-xl transition-all"
                  onClick={() =>
                    window.open(
                      "https://chat.whatsapp.com/KTXzNY274sN5ZaYaJ57qn9?mode=wwt",
                      "_blank"
                    )
                  }
                >
                  UNETE A NUESTRA COMUNIDAD
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-border/30 py-12 px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p>La IA no es el futuro. Ya trabaja contigo.</p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;

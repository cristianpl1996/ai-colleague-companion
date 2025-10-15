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
      "Ahora lo ejecuta.",
      "Pasamos de Software como Servicio a Servicio como Software.",
    ],
    expanded: [
      "Durante las últimas dos décadas, el trabajo humano se apoyó en software para operar más rápido o con menos errores.",
      "Hoy el software hace el trabajo. No necesita supervisión constante ni operación manual.",
      "Estamos en una era en la que los sistemas no solo ayudan a las personas: piensan, deciden y actúan.",
      "Este cambio redefine la naturaleza misma del trabajo y del valor económico.",
    ],
  },
  {
    icon: Globe,
    title: "Dos mundos que se fusionan",
    visible: [
      "El mercado laboral y el de software siempre estuvieron separados.",
      "Hoy, ambos están colisionando.",
    ],
    expanded: [
      "Históricamente, las empresas digitalizaron procesos analógicos.",
      "El software facilitaba el trabajo, pero no podía hacerlo por sí mismo: comprabas una herramienta de ventas, pero igual necesitabas un vendedor.",
      "Por eso, el gasto en personal siempre superó al de software por un factor de 30x.",
      "Ahora eso cambia: el software puede organizar y ejecutar tareas completas, fusionando el trabajo humano y digital en un único mercado masivo.",
    ],
  },
  {
    icon: Bot,
    title: "Nace una nueva fuerza laboral",
    visible: [
      "El auge de los trabajadores de IA crea una nueva categoría económica.",
      "La mano de obra y el software se vuelven uno solo.",
    ],
    expanded: [
      "Estamos presenciando el nacimiento de una fuerza laboral híbrida: una combinación entre inteligencia humana y digital que opera a escala.",
      "Este cambio no elimina oportunidades, las multiplica.",
      "Las clínicas, negocios y pymes que comprendan esta convergencia podrán escalar más allá de los límites humanos.",
    ],
  },
  {
    icon: TrendingUp,
    title: "La paradoja de Jevons",
    visible: [
      "La IA reemplaza algunos roles, pero también crea nuevos.",
      "La eficiencia impulsa más demanda, no menos.",
    ],
    expanded: [
      "Como en la paradoja de Jevons, una mayor eficiencia no destruye la demanda: la incrementa.",
      "Al automatizar tareas, la IA libera tiempo y genera nuevas necesidades.",
      "Esto creará más servicios, más funciones y más oportunidades laborales.",
      "La mano de obra estará integrada en cualquier software que una empresa adquiera.",
      "Conoce a tus nuevos colegas de IA.",
    ],
  },
  {
    icon: Building2,
    title: "Dos enfoques para las empresas con fuerza laboral de IA",
    visible: [
      "1️⃣ Integrar la IA en sus operaciones internas.",
      "2️⃣ Contratar servicios que automatizan procesos de principio a fin.",
    ],
    expanded: [
      "Las empresas con fuerza laboral de IA están tomando dos caminos:",
      "Integrar IA internamente, como copilotos que optimizan tareas, decisiones y productividad.",
      "Contratar servicios impulsados por IA, donde procesos que antes dependían de personas ya los hace de principio a fin la IA.",
      "Ambos caminos redefinen cómo las empresas operan, escalan y crean valor.",
    ],
  },
  {
    icon: Bot,
    title: "Colegas de IA (interno)",
    visible: [
      "Ejemplo: Hippocratic.ai — enfermeras virtuales que asisten pacientes y médicos.",
      "Copilotos que reducen carga humana y amplían cobertura.",
    ],
    expanded: [
      "Una empresa pionera en este enfoque es Hippocratic.ai, con agentes sanitarios basados en IA.",
      "Estas 'enfermeras digitales' realizan entrevistas a pacientes, evaluaciones de riesgo y seguimiento postoperatorio.",
      "No reemplazan completamente al personal médico, pero reducen la carga operativa y aumentan la eficiencia.",
      "Estos colegas de IA poseen habilidades blandas y capacidades de conversación, lo que los hace más cercanos a compañeros que a software.",
    ],
  },
  {
    icon: Laptop,
    title: "Proveedores de IA (externos)",
    visible: [
      "Empresas que transforman servicios humanos en productos automatizados.",
      "La IA ejecuta flujos de trabajo completos, no solo tareas.",
    ],
    expanded: [
      "El segundo enfoque consiste en convertir procesos enteros en servicios automatizados.",
      "Desde atención al cliente hasta análisis financiero, contabilidad o marketing: el trabajo deja de depender de empleados y pasa a ser un flujo ejecutado por sistemas inteligentes.",
      "El software ya no se compra: se contrata para trabajar.",
    ],
  },
  {
    icon: Sparkles,
    title: "Dónde dominarán primero los trabajadores de IA",
    visible: [
      "Donde la IA sea 100x más rentable que un humano.",
      "Costos bajos, personalización alta.",
    ],
    expanded: [
      "Las mayores oportunidades surgirán donde la economía unitaria favorezca a la IA: tareas repetitivas, de alto volumen y bajo riesgo.",
      "La IA no solo reduce costos, sino que genera más ingresos al personalizar la experiencia.",
      "Sectores como educación, salud, contabilidad, soporte y marketing serán los primeros en adoptarla.",
    ],
  },
  {
    icon: Rocket,
    title: "Dónde la IA supera al humano",
    visible: [
      "Procesos automatizables, repetitivos y de alto volumen.",
      "Cuando el trabajo humano es caro o escaso.",
      "Cuando las herramientas están fragmentadas o el retorno laboral es lento.",
    ],
    expanded: [
      "Factores clave donde la IA brilla:",
      "Gran número de procesos simples y automatizables.",
      "Costos laborales altos.",
      "Dificultad para contratar o alta rotación.",
      "Largo periodo de entrenamiento o incorporación.",
      "Fragmentación de herramientas y necesidad de integración.",
      "Alta tolerancia a fallos (sin riesgo crítico).",
      "Disponibilidad de grandes volúmenes de datos de entrenamiento, preferiblemente propietarios.",
      "Áreas ideales: revisión legal, cuentas por pagar, atención al cliente, data entry y soporte digital.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Dónde la IA agrega valor adicional",
    visible: [
      "La personalización generará un valor significativo para el cliente.",
      "La velocidad es un factor clave en la calidad del servicio, y el servicio 24/7 es importante.",
      "La heterogeneidad es un obstáculo para un servicio de alta calidad.",
    ],
    expanded: [
      "Ejemplo: educación.",
      "Los tutores de IA como Khanmigo enseñan hasta 80 veces más barato que un profesor humano y adaptan el contenido a cada estudiante.",
      "No reemplazan al docente, pero crean un nuevo mercado: la educación personalizada y continua.",
      "La IA amplía acceso, reduce costos y mejora la calidad del aprendizaje.",
    ],
  },
  {
    icon: Building2,
    title: "Quiénes deberían adoptar primero trabajadores con IA",
    visible: [
      "PYMES y empresas operativas con alta carga laboral.",
      "Donde la IA puede escalar sin límites humanos.",
      "Alta repetitividad y necesidad de eficiencia.",
      "Dificultad para contratar personal especializado.",
      "Procesos que requieren atención constante o disponibilidad 24/7.",
    ],
    expanded: [
      "Las primeras en adoptarlo deben ser empresas con mucha operación diaria y poco margen humano.",
      "La IA les permite aumentar o reducir su plantilla con un clic, sin costos fijos ni demoras.",
      "Ofrece flexibilidad ilimitada, operación 24/7 y consistencia total.",
      "La IA no se enferma, no se cansa, no descansa.",
      "Y en muchos casos, supera en calidad y velocidad al trabajo humano.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Esta oportunidad no se limita a la expansión del mercado. También implica la expansión de los márgenes.",
    visible: [
      "La IA permite hacer más con menos.",
      "Los costos bajan y la rentabilidad aumenta.",
      "Los agentes de IA cuestan una fracción de un humano.",
    ],
    expanded: [
      "Esta revolución no solo amplía los mercados: amplía los márgenes.",
      "Las empresas podrán contratar agentes de IA que hacen el mismo trabajo por una fracción del costo, con precisión constante y sin variabilidad humana.",
      "Esto permitirá competir a cualquier escala y mantener márgenes que antes eran imposibles.",
    ],
  },
  {
    icon: Sparkles,
    title: "El futuro cercano: software con alma",
    visible: [
      "La automatización sin empatía fracasa.",
      "El software del futuro será humano en forma y fondo.",
    ],
    expanded: [
      "Las empresas que logren que su software se sienta humano dominarán el mercado.",
      "La eficiencia ya no basta: los usuarios buscan conexión, comprensión y flexibilidad.",
      "El software con alma no solo automatiza, sino que emociona, comprende y acompaña.",
      "Su éxito dependerá de parecer menos herramienta y más aliado.",
    ],
  },
  {
    icon: Rocket,
    title: "Conclusión I",
    visible: [
      "La IA no reemplaza, amplifica.",
      "Las pymes ahora pueden escalar como las grandes.",
    ],
    expanded: [
      "Para una pequeña empresa que antes no podía contratar personas o agencias sofisticadas, la idea de un agente de IA es una revolución silenciosa.",
      "No reemplaza empleados: aumenta su capacidad y permite competir en otra liga.",
      "Las herramientas de IA democratizan la escala empresarial.",
    ],
  },
  {
    icon: Building2,
    title: "Conclusión II",
    visible: [
      "Las pymes tienen por fin acceso a la escala que siempre merecieron.",
      "La IA iguala las oportunidades.",
    ],
    expanded: [
      "Por primera vez, las pequeñas y medianas empresas tienen acceso a tecnología de nivel corporativo.",
      "La IA les ofrece el poder de las grandes compañías, sin las limitaciones de recursos humanos o financieros.",
      "Esto no es el futuro: es la justicia tecnológica.",
    ],
  },
  {
    icon: Building2,
    title: "Las Clínicas por fin tienen la oportunidad que siempre merecieron.",
    visible: [
      "Las clínicas, antes limitadas por personal, tiempo o presupuesto.",
      "Ahora pueden expandirse sin límites con agentes inteligentes.",
    ],
    expanded: [
      "Las clínicas, antes limitadas por personal, tiempo o presupuesto, ahora pueden expandirse sin límites con agentes inteligentes.",
      "La IA será su nueva fuerza laboral, estratégica, precisa y disponible 24/7.",
      "Por fin, la tecnología está del lado de quienes más la necesitaban.",
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

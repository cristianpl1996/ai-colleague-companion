import { useEffect, useRef } from "react";
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
  Rocket
} from "lucide-react";

const sections = [
  {
    icon: Settings,
    title: "El cambio de era",
    visible: [
      "El software ya no complementa el trabajo humano.",
      "Ahora lo ejecuta. Las herramientas se convirtieron en colaboradores.",
      "Los procesos digitales piensan, conversan y actúan."
    ],
    expanded: [
      "Durante años digitalizamos tareas, pero siempre hubo alguien detrás del teclado.",
      "Hoy la IA entiende, decide y actúa por sí misma.",
      "La frontera entre herramienta y compañero desapareció: la tecnología ahora trabaja contigo."
    ]
  },
  {
    icon: Globe,
    title: "El nuevo mercado laboral",
    visible: [
      "El trabajo y el software están fusionándose.",
      "Por primera vez, la tecnología forma parte activa de la fuerza laboral."
    ],
    expanded: [
      "Antes las empresas invertían millones en personas y poco en software.",
      "Ahora ambos mundos colisionan: la inteligencia digital amplía la fuerza humana.",
      "No se trata de reemplazar talento, sino de multiplicarlo."
    ]
  },
  {
    icon: Laptop,
    title: "De SaaS a 'Servicio como Software'",
    visible: [
      "Ya no pagamos por usar software.",
      "Pagamos por resultados.",
      "El software es el servicio."
    ],
    expanded: [
      "La IA ejecuta tareas completas, no solo las facilita.",
      "Las empresas ya no compran herramientas, compran soluciones que trabajan.",
      "Es el fin del software pasivo y el nacimiento del servicio autónomo."
    ]
  },
  {
    icon: Bot,
    title: "Dos caminos hacia la fuerza laboral de IA",
    visible: [
      "Dos formas de integrar trabajadores de IA:",
      "1️⃣ Colegas internos que colaboran contigo.",
      "2️⃣ Servicios externos que operan 24/7."
    ],
    expanded: [
      "Los colegas de IA son copilotos inteligentes que asisten humanos en tiempo real.",
      "Los servicios de IA ejecutan flujos enteros con calidad humana y sin descanso.",
      "Ambos transforman la manera en que producimos y servimos."
    ]
  },
  {
    icon: TrendingUp,
    title: "Impacto económico",
    visible: [
      "Los márgenes se están reescribiendo.",
      "Los servicios con IA operan con rentabilidad de software."
    ],
    expanded: [
      "Los márgenes de servicio tradicionales (<30%) se acercan a los de SaaS (>80%).",
      "Menos costos, más eficiencia, más escala.",
      "La IA convierte la productividad en rentabilidad exponencial."
    ]
  },
  {
    icon: Building2,
    title: "Dónde dominarán primero los trabajadores de IA",
    visible: [
      "Salud, educación, servicio al cliente y construcción ya viven este cambio.",
      "La IA prospera donde el trabajo es repetitivo o el talento escasea."
    ],
    expanded: [
      "Los primeros sectores en adoptar IA son los que más se benefician del apalancamiento.",
      "Donde hay alta carga operativa y baja personalización humana, la IA expande la calidad y la velocidad del servicio."
    ]
  },
  {
    icon: Sparkles,
    title: "El futuro cercano: Software con alma",
    visible: [
      "Un gran servicio no solo es eficiente.",
      "Es humano.",
      "El alma será la nueva interfaz."
    ],
    expanded: [
      "La automatización del futuro no será fría.",
      "Será empática, comprensiva y contextual.",
      "El software con alma entiende errores, emociones y necesidades, elevando la experiencia humana."
    ]
  },
  {
    icon: Rocket,
    title: "Oportunidad para las pymes",
    visible: [
      "Las pequeñas empresas ahora tienen poder de escala.",
      "Con IA pueden competir como grandes corporaciones."
    ],
    expanded: [
      "Por primera vez, las pymes acceden al mismo nivel de inteligencia operativa que los gigantes.",
      "La IA democratiza el crecimiento y les da voz en el nuevo mercado digital."
    ]
  }
];

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

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
    <main className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <Bot className="w-20 h-20 text-primary glow-icon animate-glow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold glow-text leading-tight">
            La fuerza laboral<br />de IA ya está aquí
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Del software como servicio al servicio como software.<br />
            Una nueva era donde la IA no asiste: trabaja.
          </p>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all animate-glow"
              onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })}
            >
              Descubrir más
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div id="content" ref={sectionsRef} className="max-w-6xl mx-auto px-6 py-20 space-y-8">
        {sections.map((section, index) => (
          <ExpandableSection
            key={index}
            icon={section.icon}
            title={section.title}
            visibleContent={section.visible}
            expandedContent={section.expanded}
            index={index}
          />
        ))}

        {/* CTA Section */}
        <section className="glass-card rounded-2xl p-12 md:p-16 text-center space-y-8 animate-fade-in-up">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center glow-icon">
              <Sparkles className="w-8 h-8 text-primary animate-glow" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold glow-text">
            Conoce a tus nuevos colegas de IA
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            La revolución ya empezó.<br />
            ¿Tu empresa será espectadora o protagonista?
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all"
            >
              Explorar casos reales
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-xl transition-all"
            >
              Solicitar una demo
            </Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>La IA no es el futuro. Ya trabaja contigo.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;

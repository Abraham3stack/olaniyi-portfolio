import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 section-padding">
      <div ref={ref} className="max-w-3xl mx-auto">
        <p className={`text-primary text-sm font-medium tracking-[0.25em] uppercase mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Background
        </p>
        <h2 className={`font-display text-4xl md:text-5xl tracking-wide text-foreground mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          ABOUT ME
        </h2>

        <div className={`space-y-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            I am a calm and confident central defender who brings control, composure, and intelligence to the backline. I take pride in my ability to read the game, win duels, and remain composed under pressure. My positioning and communication allow me to organize the defense effectively and maintain stability throughout the game, making me a reliable and dominant presence at the heart of defense.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            My game is built on composure, awareness, and consistency. I excel in 1v1 situations, using strength, skill, and precise tackling to win the ball cleanly. Whether stepping forward to challenge or covering space, I bring confidence, control, and a strong defensive mindset every time I step onto the pitch.
          </p>
          <p className="text-foreground font-semibold text-lg mt-8 border-l-2 border-primary pl-4">
            Experienced at club level, including time with Kwara United (Nigeria), bringing consistency, composure, and defensive leadership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

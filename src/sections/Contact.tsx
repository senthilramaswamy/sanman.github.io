export function Contact() {
  return (
    <section
      id="contact"
      className="text-center text-cream"
      style={{
        background: 'linear-gradient(165deg, #241A12 0%, #3D160F 100%)',
        padding: '120px 0',
      }}
    >
      <div className="mx-auto max-w-site px-8 max-[600px]:px-[22px]">
        <h2
          className="animate-reveal animate-reveal-delay-1 mx-auto mb-[18px] text-cream"
          style={{ fontSize: 'clamp(29px, 3.8vw, 44px)', maxWidth: '620px' }}
        >
          We value thoughtful conversations with businesses.
        </h2>
        <p
          className="animate-reveal animate-reveal-delay-2 mx-auto mb-[38px] font-light"
          style={{ color: 'rgba(244,234,217,0.72)', maxWidth: '480px', fontSize: '16px' }}
        >
          We welcome conversations with promoters and management teams of businesses we are interested in understanding better.
        </p>
        <a
          href="mailto:contact@sanjayjainfamilyoffice.com"
          className="animate-reveal animate-reveal-delay-3 inline-flex items-center gap-2 border px-[26px] py-[13px] text-[14.5px] font-medium text-cream transition-colors hover:border-cream"
          style={{ borderColor: 'rgba(244,234,217,0.5)', borderRadius: '2px' }}
        >
          Get in touch →
        </a>
      </div>
    </section>
  );
}

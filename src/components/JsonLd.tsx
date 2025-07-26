interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Server component for adding JSON-LD structured data
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
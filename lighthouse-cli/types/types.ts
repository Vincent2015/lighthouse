interface AuditResult {
  displayValue: string;
  debugString: string;
  comingSoon?: boolean;
  score: number;
  description: string;
  name: string;
  category: string;
  helpText?: string;
  requiredArtifacts?: Array<string>;
  extendedInfo?: {
    value: string;
    formatter: string;
  };
}

interface AggregationResultItem {
  overall: number;
  name: string;
  scored: boolean;
  subItems: Array<AuditResult | string>;
}

interface Aggregation {
  name: string;
  score: Array<AggregationResultItem>;
}

interface Results {
  url: string;
  aggregations: Array<Aggregation>;
  audits: Object;
  lighthouseVersion: string;
};

export {
  Results,
  Aggregation,
  AggregationResultItem,
  AuditResult,
}

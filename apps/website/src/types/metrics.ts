export interface ValueMetric {
    label: string;
    value: string;
    description: string;
    icon: 'time' | 'growth' | 'money' | 'users' | 'performance';
}

import React from 'react';
import { 
  Bot, 
  Rocket, 
  UserCheck, 
  Sparkles 
} from 'lucide-react';

// Define features with icons and descriptions
const features = [
  { 
    title: 'Création du CV avec l\'IA',
    description: 'Générez un CV professionnel en quelques clics',
    icon: Bot
  },
  { 
    title: 'Offres personnalisées pour vous',
    description: 'Des recommandations de carrière sur mesure',
    icon: Rocket
  },
  { 
    title: 'Aucun enregistrement supplémentaire',
    description: 'Processus simplifié sans étapes superflues',
    icon: UserCheck
  },
  { 
    title: 'Trouvez des opportunités avec l\'IA',
    description: 'Découvrez les meilleures opportunités professionnelles',
    icon: Sparkles
  }
];

const Features: React.FC = () => {
  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
          Pourquoi JobPath AI ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-white shadow-lg rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className="mb-4 flex items-center justify-center">
                  <Icon 
                    className="text-blue-600 w-12 h-12 group-hover:text-blue-700 transition-colors" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [hasAssembly, setHasAssembly] = useState(false);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [assemblyCost, setAssemblyCost] = useState(0);

  const categories = [
    { name: 'Кухни', icon: 'ChefHat', items: '120+ товаров' },
    { name: 'Спальни', icon: 'Bed', items: '85+ товаров' },
    { name: 'Гостиные', icon: 'Sofa', items: '95+ товаров' },
    { name: 'Детские', icon: 'Baby', items: '60+ товаров' },
    { name: 'Мягкая мебель', icon: 'Armchair', items: '110+ товаров' },
    { name: 'Матрасы', icon: 'Moon', items: '45+ товаров' }
  ];

  const featuredProducts = [
    { name: 'Диван "Комфорт"', price: '65 000 ₽', image: '/img/a23adf57-68c3-4a0a-b587-0aa1146e4e51.jpg' },
    { name: 'Кровать "Уют"', price: '45 000 ₽', image: '/img/a23adf57-68c3-4a0a-b587-0aa1146e4e51.jpg' },
    { name: 'Шкаф "Классик"', price: '55 000 ₽', image: '/img/a23adf57-68c3-4a0a-b587-0aa1146e4e51.jpg' }
  ];

  const calculateDelivery = () => {
    const cities = {
      'moscow': 1500,
      'spb': 2000,
      'ekb': 2500,
      'kazan': 2200
    };
    
    const cost = cities[selectedCity as keyof typeof cities] || 0;
    setDeliveryCost(cost);
    setAssemblyCost(hasAssembly ? cost * 0.6 : 0);
  };

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-warm-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/979844fc-6790-4e70-8f15-4da7cbee360a.jpg" 
                alt="Мебель у Натальи" 
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold text-warm-800">Мебель у Натальи</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="text-warm-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#delivery" className="text-warm-700 hover:text-primary transition-colors">Доставка</a>
              <a href="#about" className="text-warm-700 hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-warm-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-100 to-warm-200 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-warm-800 mb-6 leading-tight">
                Уютная мебель для вашего дома
              </h2>
              <p className="text-xl text-warm-600 mb-8">
                Создаем комфорт и тепло в каждом доме. Качественная мебель с доставкой и сборкой по всей России.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="border-warm-400 text-warm-700">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать доставку
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/a23adf57-68c3-4a0a-b587-0aa1146e4e51.jpg" 
                alt="Уютная гостиная"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" className="text-yellow-500" size={20} />
                  <span className="font-semibold">4.9</span>
                  <span className="text-gray-500">1000+ отзывов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-warm-800 mb-12">Каталог мебели</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-warm-200 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon name={category.icon as any} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-warm-800 mb-2">{category.name}</h4>
                  <p className="text-warm-600">{category.items}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-warm-800 mb-12">Популярные товары</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group overflow-hidden border-warm-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button 
                    size="sm" 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="Heart" size={16} />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-warm-800 mb-2">{product.name}</h4>
                  <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Calculator */}
      <section id="delivery" className="py-16 bg-warm-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-warm-800 mb-8">Калькулятор доставки и сборки</h3>
            <Card className="border-warm-200">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="city" className="text-warm-800 font-medium">Выберите город</Label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите город доставки" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moscow">Москва</SelectItem>
                        <SelectItem value="spb">Санкт-Петербург</SelectItem>
                        <SelectItem value="ekb">Екатеринбург</SelectItem>
                        <SelectItem value="kazan">Казань</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="assembly" 
                      checked={hasAssembly}
                      onChange={(e) => setHasAssembly(e.target.checked)}
                      className="rounded border-warm-300"
                    />
                    <Label htmlFor="assembly" className="text-warm-800">Нужна сборка мебели</Label>
                  </div>

                  <Button 
                    onClick={calculateDelivery} 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={!selectedCity}
                  >
                    <Icon name="Calculator" size={16} className="mr-2" />
                    Рассчитать стоимость
                  </Button>

                  {deliveryCost > 0 && (
                    <div className="bg-warm-100 p-6 rounded-lg border border-warm-200">
                      <h4 className="font-semibold text-warm-800 mb-4">Результат расчета:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-warm-600">Доставка:</span>
                          <span className="font-semibold text-warm-800">{deliveryCost} ₽</span>
                        </div>
                        {hasAssembly && (
                          <div className="flex justify-between">
                            <span className="text-warm-600">Сборка:</span>
                            <span className="font-semibold text-warm-800">{assemblyCost} ₽</span>
                          </div>
                        )}
                        <div className="border-t border-warm-300 pt-2 mt-2">
                          <div className="flex justify-between text-lg">
                            <span className="font-semibold text-warm-800">Итого:</span>
                            <span className="font-bold text-primary">{deliveryCost + assemblyCost} ₽</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-warm-800 mb-2">Быстрая доставка</h4>
              <p className="text-warm-600">Доставим за 1-3 дня по всей России</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-warm-800 mb-2">Гарантия качества</h4>
              <p className="text-warm-600">2 года гарантии на всю мебель</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-warm-800 mb-2">Сборка под ключ</h4>
              <p className="text-warm-600">Профессиональная сборка мебели</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-warm-800 mb-2">Рассрочка 0%</h4>
              <p className="text-warm-600">Беспроцентная рассрочка до 12 месяцев</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Мебель у Натальи</h4>
              <p className="text-warm-300 mb-4">Создаем уют в каждом доме уже более 10 лет</p>
              <div className="flex space-x-4">
                <Icon name="Phone" size={20} />
                <span>+7 (800) 123-45-67</span>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-warm-300">
                <li>Мягкая мебель</li>
                <li>Спальни</li>
                <li>Кухни</li>
                <li>Гостиные</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-warm-300">
                <li>Доставка</li>
                <li>Сборка</li>
                <li>Гарантия</li>
                <li>Рассрочка</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-warm-300">
                <p>г. Москва, ул. Примерная, 123</p>
                <p>natasha.mebel@mail.ru</p>
                <p>Ежедневно 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
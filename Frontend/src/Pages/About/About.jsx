import './About.css'
import { pageTitle } from '../../App';
import MainTitle from '../../Components/MainTitle';
import { Container } from 'react-bootstrap';

import { useEffect } from 'react';
const About = () => {

  // making some logical things , nesassary to be in the page
  const aboutPageTitle = 'نبذة عنا'
  useEffect(() => {
    window.scroll(0, 0)
    document.title = `${aboutPageTitle} - ${pageTitle}`
  }, [])

  return (
    <Container id='about' dir='rtl'>
      <MainTitle title="من نحن" />
      <L4Story />
      <L4SGoals />
      <L4SPrinciples />
    </Container>
  )
}

export default About;

export const L4Story = () => {
  return (
    <Container fluid className='L4s-story'>
      <h2 className="shared-title">قصة المنظمة</h2>
      <p className='phrase'>تأسست منظمة "تعلم من أجل السودان" في عام 2019 على يد مجموعة من الشباب السودانيين الطموحين الذين آمنوا بقوة التعليم كوسيلة للتغيير الاجتماعي والتنمية. في عالم يتغير بسرعة، كان الهدف هو تقديم فرص تعليمية متميزة للشباب السوداني، من خلال شراكات استراتيجية مع جهات خارجية مثل " تجمع الشباب السوري ". تمكنت المنظمة من توفير منح دراسية عبر منصة كورسيرا، مما يتيح للشباب الحصول على التعليم الجيد والاعتراف بشهاداتهم دون تكاليف.</p>
    </Container>
  )
}

export const L4SGoals = () => {
  return (
    <Container fluid className='L4s-goals'>
      <h2 className="shared-title">الأهداف</h2>
      <p className='phrase'>توفير التعليم المجاني: تمكين الشباب السوداني  من الوصول إلى كورسات تعليمية مجانية عالية الجودة.
        تعزيز المهارات: تعزيز المهارات الأكاديمية والمهنية للشباب، مما يساعدهم على المنافسة في سوق العمل.
        بناء مجتمع متعلم: إنشاء مجتمع من المتعلمين يدعمون بعضهم البعض ويعملون نحو تحقيق التنمية المستدامة.
        تمكين الشباب: تشجيع الشباب على تطوير قدراتهم القيادية والمشاركة الفعالة في المجتمع.
      </p>
    </Container>
  )
}

export const L4SPrinciples = () => {
  return (
    <Container fluid className='L4s-principles'>
      <h2 className="shared-title">القيم و المبادئ</h2>
      <ul>
        <li>التعاون: تعزيز العمل الجماعي والشراكة مع الجهات المختلفة لتحقيق الأهداف المشتركة.</li>
        <li>الشمولية: توفير فرص متساوية لجميع الشباب دون تمييز.</li>
        <li>التطوير المستمر: الالتزام بتحسين البرامج والموارد التعليمية بصفة مستمرة.</li>
        <li>الشفافية: العمل بشفافية مع المتطوعين والمستفيدين لضمان الثقة والمصداقية.</li>
      </ul>
    </Container>
  )
}

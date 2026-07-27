import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { temas, waLink } from "@/lib/site";
import { breadcrumbLd } from "@/lib/breadcrumbs";
import { MessageCircle, ArrowLeft, BookOpen } from "lucide-react";

type QA = { q: string; a: React.ReactNode };
type Section = { heading: string; body: React.ReactNode };
type ArticleContent = {
  intro: string;
  qas?: QA[];
  sections?: Section[];
  extraCta?: { label: string; to: string; note?: string };
};

const articles: Record<string, ArticleContent> = {
  vacaciones: {
    intro:
      "Las vacaciones son un descanso continuo, de duración determinada por la ley, que se reconoce después de un año de servicios ininterrumpidos, con la finalidad de reponer el desgaste físico y mental del trabajador y promover el acercamiento familiar. A continuación respondemos las preguntas más frecuentes conforme a la Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras (LOTTT).",
    qas: [
      { q: "¿Cuándo nace el derecho a las vacaciones?", a: "Cuando el trabajador cumple un (1) año de trabajo ininterrumpido (Art. 190 LOTTT)." },
      { q: "¿Cuántos días de disfrute le corresponden al trabajador?", a: "15 días hábiles remunerados el primer año, más un (1) día adicional por cada año de servicio, hasta un máximo de 15 días adicionales (30 días hábiles en total) (Art. 190 LOTTT)." },
      { q: "¿Corresponden cesta tickets durante las vacaciones?", a: "Sí. Durante el periodo de vacaciones el trabajador tiene derecho al beneficio de alimentación, que debe pagarse por anticipado al inicio del disfrute (Art. 190 y 194 LOTTT)." },
      { q: "¿Se pagan las cotizaciones a la seguridad social durante las vacaciones?", a: "Sí. El servicio no se considera interrumpido por las vacaciones a los fines del pago de cotizaciones y contribuciones (Art. 190 LOTTT)." },
      { q: "¿Cuántos días corresponden por bono vacacional?", a: "Un mínimo de 15 días de salario normal más un (1) día por cada año de servicio, hasta un total de 30 días. El bono vacacional tiene carácter salarial (Art. 192 LOTTT)." },
      { q: "¿Cuándo se paga el salario de vacaciones, el bono vacacional y el beneficio de alimentación?", a: "Al inicio de las vacaciones (Art. 194 LOTTT)." },
      { q: "¿Qué pasa si termina la relación de trabajo con vacaciones vencidas y no disfrutadas?", a: "El patrono debe pagarlas calculadas al salario normal devengado a la fecha de terminación (Art. 195 LOTTT)." },
      {
        q: "¿Qué son las vacaciones fraccionadas?",
        a: (
          <>
            Cuando la relación termina antes de cumplir el año, el trabajador tiene derecho al pago proporcional de vacaciones y bono vacacional por los meses completos trabajados (Art. 196 LOTTT).
            <br />
            <strong>Fórmula:</strong> VF = días que hubieran correspondido × meses completos trabajados ÷ 12.
            <br />
            <strong>Ejemplo:</strong> por 8 meses trabajados → 15 × 8 ÷ 12 = 10 días de salario y 10 días de bono vacacional.
          </>
        ),
      },
      { q: "¿Puede el empleador pagar las vacaciones sin conceder el disfrute?", a: "No. El disfrute efectivo es obligatorio, tanto para el trabajador como para el patrono (Art. 197 LOTTT)." },
      { q: "¿Qué pasa si el empleador paga pero no concede el disfrute?", a: "Deberá conceder el disfrute y volver a pagarlo con el salario que devengue el trabajador al momento del disfrute (Art. 197 LOTTT)." },
      { q: "¿Puede el trabajador acumular vacaciones?", a: "Sí, hasta dos (2) periodos, a solicitud del trabajador (Art. 199 LOTTT)." },
      { q: "¿Se puede adelantar o posponer el disfrute?", a: "Se puede adelantar solo para hacerlo coincidir con las vacaciones escolares, en el caso de trabajadores con hijos en edad escolar (Art. 199 LOTTT)." },
      { q: "¿Por cuánto tiempo se puede posponer el disfrute?", a: "Hasta tres (3) meses a partir de la fecha en que nació el derecho, salvo el caso de acumulación o postergación familiar (Art. 200 LOTTT)." },
      { q: "¿Se pueden descontar días de vacaciones cuando el trabajador falta?", a: "Depende del tipo de falta: si es justificada, no se descuenta. Si es injustificada y suman siete (7) o más días al año, y el patrono pagó el salario de esos días, se pueden imputar al periodo de vacaciones (Art. 202 LOTTT)." },
      {
        q: "¿Cuál es el salario base de cálculo de las vacaciones y el bono vacacional?",
        a: (
          <>
            <strong>Salario fijo:</strong> el salario normal devengado en el mes efectivo de labores inmediatamente anterior al disfrute.
            <br />
            <strong>Salario variable:</strong> el promedio del salario normal de los tres (3) meses inmediatamente anteriores al disfrute.
          </>
        ),
      },
    ],
    extraCta: { label: "Ver Guía de Cálculo de Vacaciones ($15)", to: "/recursos/guias#calculo-vacaciones" },
  },
  "reposo-medico": {
    intro:
      "Respuestas a las consultas más frecuentes sobre reposos médicos, con base en la LOTTT y la práctica ante el IVSS.",
    qas: [
      { q: "¿Cómo se valida un reposo médico ante el IVSS?", a: "Los reposos deben ser convalidados por el IVSS cuando son mayores a 3 días, ya que el IVSS otorga la prestación dineraria a partir del cuarto día de reposo." },
      { q: "¿Puedo viajar estando de reposo?", a: "En principio no: si estás de reposo no estás en condiciones de trabajar ni de viajar, salvo que el viaje sea para recibir tratamiento médico." },
      { q: "Un trabajador se accidentó durante sus vacaciones y trajo un reposo. ¿Qué hago?", a: "Se suspende el disfrute de las vacaciones, que se reanuda al terminar el reposo. Ejemplo: si el accidente ocurrió en el día 10 de un disfrute de 20 días, se suspenden las vacaciones, el trabajador toma su reposo, y luego retoma los 10 días restantes. El reposo debe estar validado por el IVSS y conviene una evaluación médico-ocupacional post vacacional." },
      { q: "¿Es legal descontar los 3 primeros días de reposo y pagar desde el 4º día el 33,33% del salario?", a: "Sí. El salario es la retribución por el trabajo prestado; para la contingencia de enfermedad existe la seguridad social, cuya indemnización diaria comienza a partir del cuarto día de reposo." },
      { q: "¿Se pueden descontar los días de inasistencia por reposo?", a: "Las inasistencias y reposos de hasta 3 días pueden descontarse, ya que el trabajador no prestó servicio. Estos justificativos sirven para justificar la falta (la enfermedad es causa de inasistencia justificada, Art. 70 lit. F LOTTT), por lo que no son causal de despido aunque se acumulen. Los reposos mayores a 3 días deben convalidarse ante el IVSS." },
      { q: "¿Debo pagar el reposo de una trabajadora por enfermedad de su hijo?", a: "Es práctica aceptada por el IVSS convalidar reposos por enfermedad de un hijo, con sustento en los artículos 76 y 78 de la Constitución y el Art. 25 de la LOPNNA. Si el reposo está validado por el IVSS, se paga el 33,33% del salario (el IVSS cubre el 66% restante a partir del 4º día). Si no se validó ante el IVSS y solo hubo reposo de un médico privado, hay suspensión de la relación y el empleador no está obligado a pagar salario, pero las faltas siguen siendo justificadas." },
      { q: "Funcionaria pública con 52 semanas de reposo: ¿puede reclamar vacaciones vencidas y cesta ticket?", a: "Los funcionarios se rigen por la Ley del Estatuto de la Función Pública y, en lo no previsto, por la LOTTT. El periodo de faltas justificadas por enfermedad no interrumpe el año para las vacaciones (Art. 202 LOTTT / Art. 16 RGLCA). Puede solicitar sus vacaciones acordando la oportunidad con el jefe de la dependencia. Ante un nuevo reposo, la organización debe pagar el beneficio de alimentación y la diferencia entre lo que pague el IVSS y el salario." },
      { q: "¿Se pagan las utilidades durante el reposo pre y post natal?", a: "Sí. Aunque el Art. 131 LOTTT reduce las utilidades a los meses trabajados, tratándose de la maternidad se hace una interpretación restrictiva para garantizar la protección integral (Art. 76 de la Constitución y convenios internacionales), por lo que deben pagarse completas durante el reposo pre y post natal. En cambio, en un reposo médico común, las utilidades se pagan de forma proporcional." },
      { q: "Trabajador con reposo prolongado: ¿hasta cuándo responde la empresa y cuál es el procedimiento?", a: "El reposo puede durar hasta 52 semanas; al finalizar, el IVSS reevalúa al trabajador y puede extenderlo hasta 52 semanas más. Si no hay recuperación, se solicita la incapacidad ante el IVSS. El retiro no es automático a las 52 semanas: solo procede una vez declarada la incapacidad, con el pago de prestaciones sociales y demás beneficios." },
      { q: "¿Se generan prestaciones sociales durante el reposo?", a: "El tiempo de reposo se computa para la antigüedad (Art. 73 LOTTT), pero no genera prestaciones sociales como tal, porque no se está prestando el servicio ni percibiendo salario. En reposo pre y post natal, esos periodos sí se computan en la antigüedad (Art. 342 LOTTT)." },
      { q: "¿Cuántos días tiene el trabajador para presentar el reposo a la empresa?", a: "Debe notificar al empleador la causa de su inasistencia dentro de los 2 días hábiles siguientes (Art. 79 LOTTT y Art. 37 del Reglamento)." },
      { q: "Me aumentaron el sueldo a todos menos a mí porque estaba de reposo. ¿Es correcto?", a: "Durante el reposo (mayor a 3 días) hay suspensión de la relación: el trabajador no presta servicio y recibe indemnización del IVSS (66,66%) más la diferencia del empleador (33,33%). El aumento aplica cuando el trabajador se reincorpora." },
      { q: "¿Se puede despedir a un trabajador durante un reposo?", a: "No. No se puede despedir a un trabajador durante un reposo (Art. 74 LOTTT). Si es necesario, se contrata un suplente." },
      { q: "¿Cómo se contabilizan los reposos médicos?", a: "Por días continuos, de lunes a domingo. Igual se contabilizan los reposos pre y post natal." },
      { q: "Un compañero cubrió el reposo de otro sin dejar sus funciones. ¿Se le paga extra?", a: "Sí. Si un trabajador cubre las funciones del que está de reposo además de las propias, el empleador debe pagarle adicionalmente por ese trabajo extra, independientemente de su salario. El trabajador también puede negarse a esas funciones extra, sobre todo si afecta su salud." },
      { q: "¿Debo pagar el reposo por un accidente no laboral?", a: "El pago es obligatorio si el trabajador no está afiliado al IVSS por parte de la empresa. Si está afiliado, el empleador solo paga la diferencia (33,33%) entre la indemnización del IVSS (66,66%) y el salario." },
      { q: "Un trabajador de reposo durante vacaciones colectivas: ¿se le conceden y pagan?", a: "Debe concedérsele el disfrute efectivo de sus vacaciones, no como colectivas sino de forma individual, cuando le corresponda o cuando ambas partes lo acuerden. Evita pagar sin que el trabajador disfrute efectivamente." },
    ],
    extraCta: { label: "Conocer la Asesoría Continua", to: "/servicios#asesoria-continua" },
  },
  "anticipo-prestaciones": {
    intro:
      "El anticipo de prestaciones sociales permite al trabajador disponer de parte de lo acreditado como garantía para cubrir necesidades específicas previstas en la ley. A continuación, el marco legal aplicable y las recomendaciones prácticas.",
    sections: [
      {
        heading: "ART. 144 LOTTT",
        body: (
          <>
            <p>El trabajador tendrá derecho al anticipo hasta de un setenta y cinco por ciento (75%) de lo acreditado o depositado como garantía de sus prestaciones sociales, para satisfacer obligaciones derivadas de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>La construcción, adquisición, mejora o reparación de vivienda para él y su familia;</li>
              <li>La liberación de hipoteca o de cualquier otro gravamen sobre vivienda de su propiedad;</li>
              <li>Las pensiones escolares para él, su cónyuge, hijos o con quien haga vida marital; y</li>
              <li>Los gastos por atención médica y hospitalaria de él, su cónyuge, hijos o con quien haga vida marital.</li>
            </ul>
          </>
        ),
      },
      {
        heading: "FRECUENCIA DE LOS ANTICIPOS",
        body: (
          <>
            <p className="font-semibold">Art. 74 Reglamento de la LOTTT</p>
            <p className="mt-2">El trabajador o trabajadora tendrá derecho a solicitar una (1) vez al año anticipos de lo acreditado o depositado, o crédito o aval, salvo en los casos de gastos por atención médica u hospitalaria.</p>
          </>
        ),
      },
      {
        heading: "INFORMACIÓN SOBRE EL DESTINO DE LOS ANTICIPOS",
        body: (
          <p>El empleador podrá exigir al trabajador o trabajadora información sobre el destino de la suma de dinero solicitado en anticipo, o del crédito o aval, según fuere el caso y las pruebas que lo evidencien.</p>
        ),
      },
      {
        heading: "RECOMENDACIONES PRÁCTICAS",
        body: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Realizar el cálculo de la garantía de prestaciones sociales que corresponde a cada trabajador.</li>
            <li>El monto que se puede entregar a título de anticipo es sólo el 75% de lo acreditado como garantía de prestaciones sociales.</li>
            <li>A fin de otorgar el anticipo la entidad de trabajo debe solicitar los soportes de los gastos que desea cubrir el trabajador con sus prestaciones sociales: presupuestos, facturas, proyecto de construcción, opción compra-venta, borrador de documento de liberación de hipoteca, informes médicos, constancias de estudio, convenios de pago, etc.</li>
            <li>La solicitud del anticipo debe ser realizada únicamente por el trabajador para atender a los gastos previstos en el Art. 144 LOTTT, debe hacerlo presentando los soportes correspondientes, debe ser firmado por el trabajador y debe colocar sus huellas dactilares.</li>
            <li>La solicitud de adelanto de prestaciones sociales, el cálculo que se realice a tal efecto: cálculo de garantía de prestaciones sociales y el comprobante de pago debidamente recibido por el trabajador debe ser archivado en el expediente de cada trabajador.</li>
            <li>El monto adelantado se deducirá del fondo de garantía de prestaciones sociales.</li>
          </ul>
        ),
      },
    ],
    extraCta: { label: "Ver Guía de Cálculo de Prestaciones ($15)", to: "/recursos/guias#calculo-prestaciones" },
  },
  "periodo-prueba": {
    intro:
      "El período de prueba permite a las partes evaluar la conveniencia de la relación de trabajo. Revisamos su regulación, límites de duración, nulidades y su interacción con los contratos a tiempo determinado según la LOTTT y la jurisprudencia de la Sala de Casación Social.",
    sections: [
      {
        heading: "¿Cuál es el objeto de un contrato de periodo de prueba?",
        body: (
          <>
            <p>El objeto del mismo es que el trabajador o trabajadora juzgue si las condiciones de trabajo son de su conveniencia y el patrono o patrona aprecie sus conocimientos y aptitudes.</p>
            <p className="mt-2">El periodo de prueba no estaba regulado de forma expresa en LOT, tampoco está desarrollado en la nueva LOTTT, lo que se desprende de ambas es el tiempo de duración de dicho periodo, cuando se establece el momento en que los trabajadores gozan de estabilidad, en la LOT después de los tres meses de trabajo, y en la LOTTT a partir del primer mes de servicios.</p>
            <p className="mt-2 font-semibold">El desarrollo sobre el periodo de prueba se encuentra en el Reglamento de la LOT artículo 25:</p>
            <p className="mt-2 italic">"Las partes podrán pactar en los contratos de trabajo celebrados por escrito un período de prueba que no excederá de noventa (30) días continuos*, a objeto de que el trabajador o trabajadora juzgue si las condiciones de trabajo son de su conveniencia y el patrono o patrona aprecie sus conocimientos y aptitudes."</p>
          </>
        ),
      },
      {
        heading: "¿Qué le corresponde a un trabajador al terminar el contrato por periodo de prueba?",
        body: (
          <>
            <p>Durante el período de prueba, cualquiera de las partes podrá dar por extinguido el contrato de trabajo sin que hubiere lugar a indemnización alguna, sin perjuicio de los derechos que se hubieren causado en proporción al tiempo trabajado, así como el preaviso correspondiente de conformidad con el artículo 104 de la Ley Orgánica del Trabajo.</p>
            <p className="mt-2"><strong>ADAPTANDO A LA LOTTT:</strong> En proporción al tiempo trabajado: no más de 30 días continuos no corresponde ni vacaciones fraccionadas ni utilidades fraccionadas, ya que estas se pagan por meses completos trabajados. Y en la LOTTT no se prevé la figura del preaviso por parte del empleador, así que éste no está obligado a otorgarlo.</p>
            <p className="mt-2 text-sm text-muted-foreground">*Adaptándolo a la nueva LOTTT el periodo de prueba no puede exceder de treinta (30) días continuos. En la LOT ERAN 90 DÍAS CONTINUOS.</p>
          </>
        ),
      },
      {
        heading: "NULIDAD DEL CONTRATO POR PERIODO DE PRUEBA",
        body: (
          <p><strong>Parágrafo Primero:</strong> Será nula la estipulación que establezca un período de prueba cuando el trabajador o trabajadora hubiere desempeñado las mismas o similares funciones con anterioridad en la empresa, bajo cualquier modalidad.</p>
        ),
      },
      {
        heading: "PERIODO DE PRUEBA Y ANTIGÜEDAD DEL TRABAJADOR",
        body: (
          <>
            <p><strong>Parágrafo Segundo:</strong> El período de prueba se tomará en consideración para determinar la antigüedad del trabajador o trabajadora, cuando éste continúe prestando servicios una vez vencido aquél.</p>
            <p className="mt-3">Este punto ha sido tratado por la Sala de Casación Social:</p>
            <p className="mt-2 italic">"Observa la Sala que en la cláusula cuarta del contrato de trabajo suscrito entre las partes a que se hizo referencia precedentemente fue pactado un período de prueba, entonces luce conveniente, traer a colación la definición que a esta institución laboral le ha conferido la doctrina patria, observando que el mismo ha sido concebido como la oportunidad que inicialmente tienen las partes involucradas en una relación de trabajo, de conocer las bondades o inconvenientes de la contraprestación recibida por cada una de ellas, sin que deriven consecuencias económico-legales perjudiciales para la parte que considere la inconveniencia de la prosecución de la relación.</p>
            <p className="mt-2">Por otra parte, los contratos de trabajo por tiempo determinado son aquellos en los cuales se ha limitado la duración de los servicios del trabajador, es decir, concluyen con el vencimiento del término prefijado.</p>
          </>
        ),
      },
      {
        heading: "¿Se puede celebrar un contrato por tiempo determinado en el que se establezca periodo de prueba?",
        body: (
          <>
            <p>Continuando la cita:</p>
            <p className="mt-2 italic">"…A criterio de esta Sala, resulta incompatible con la suscripción de un contrato por tiempo determinado el establecimiento de un período de prueba, ya que la intención teleológica de éste, tal y como se refirió en los párrafos precedentes, va dirigida a la comprobación de habilidades, conveniencias o bondades de una parte para con la otra en un contrato por tiempo indefinido, no para este tipo de contratos donde las partes ad initio han establecido el lapso de vigencia, cuando así lo exija la naturaleza del servicio, o tenga por objeto sustituir lícita y temporalmente a un trabajador, o en el caso de la contratación de personal venezolano para laborar en el exterior…"</p>
            <p className="mt-2 italic">"…En el presente caso, se observa, que las partes celebraron un contrato de trabajo a tiempo determinado, en cuya cláusula quinta se indica de manera imprecisa un periodo de prueba de 90 días, por lo que se estipula en el contenido de dicho contrato a término un período de prueba. En este sentido, dada la naturaleza de ambos contratos, a término y período de prueba, resulta incompatible establecer en un contrato de trabajo a tiempo determinado un período de prueba, por cuanto este último tiene por objetivo la comprobación de la aptitud profesional del contratado, así como su adaptación a la tarea encomendada, mientras que en el contrato a término subsiste una obligación de la prestación del servicio, bajo subordinación, en el cual el contratado adquiere una obligación de hacer y el contratante adquiere una obligación de dar en un tiempo prefijado, sin que se someta a la comprobación de aptitudes o habilidades."</p>
          </>
        ),
      },
      {
        heading: "¿Qué consecuencia tiene el terminar un contrato por tiempo determinado alegando no superación del periodo de prueba?",
        body: (
          <p>En tal sentido la consecuencia de la terminación anticipada de un contrato por tiempo determinado alegando que en el mismo se estableció un periodo de prueba y que la terminación se hace dentro de tal periodo (actualmente treinta días continuos), dará lugar al pago al trabajador de las indemnizaciones que serán igual al importe de los salarios que percibiría hasta la fecha de terminación del Contrato y el monto que le corresponda por las prestaciones sociales hasta la fecha de terminación establecida en el contrato.</p>
        ),
      },
    ],
    extraCta: { label: "Conocer la Asesoría Continua", to: "/servicios#asesoria-continua" },
  },
  "cesta-tickets": {
    intro:
      "Respuestas a las consultas más frecuentes sobre el beneficio de alimentación (Cesta Tickets): pago en jornada reducida, vacaciones, reposos, días de descanso, horas extras y más.",
    sections: [
      {
        heading: "PAGO DE CESTATICKETS EN HORARIO REDUCIDO POR RACIONAMIENTO ELÉCTRICO",
        body: (
          <>
            <p className="font-bold">¿Qué sucede ahora con los trabajadores de los centros comerciales que se deben apegar al racionamiento de electricidad? En lugar de las 8 horas diarias un trabajador ahora sólo va a trabajar de 3 a 7 PM. ¿Se debe pagar todo igual incluyendo el cestaticket aunque trabaje la mitad del tiempo?</p>
            <p className="mt-2">Debido a que el racionamiento de electricidad se debe a causas no imputables al empleador, se deberá realizar el pago del beneficio de alimentación y salario de forma proporcional al tiempo trabajado. Los empleadores deben establecer estrategias de organización a fin de mantener sus operaciones, por ejemplo trabajar de 3 a 7 PM, es decir medio turno y establecer turnos de trabajo rotativos. Se debe reducir el salario de forma temporal y pasarlo por escrito a sus trabajadores. En los Centros Comerciales que deciden trabajar en la mañana y luego en la tarde podrán hacer un turno en la mañana y otro en la tarde y rotar a los trabajadores de forma que cada uno trabaje sólo uno de esos turnos al día. En todos los casos, y particularmente en situaciones como estas recomendamos que la organización tenga un buen Reglamento Interno.</p>
          </>
        ),
      },
      {
        heading: "PAGO DE CESTATICKETS EN VACACIONES",
        body: (
          <>
            <p className="font-bold">¿Cómo se otorga el beneficio de alimentación cuando el trabajador está de vacaciones?</p>
            <p className="mt-2">Cuando el trabajador se encuentre de vacaciones, deberá recibir el beneficio de alimentación por los días hábiles que le corresponda de disfrute de vacaciones y con la entrada en vigencia del DCTS, también se le deberá otorgar el beneficio por los días de descanso y feriados comprendidos en el periodo vacacional. Conforme el artículo 90 CRBV, 194 LOTTT, 5, 6 y 7 DCTS. El pago debe hacerse al inicio del disfrute de las vacaciones.</p>
          </>
        ),
      },
      {
        heading: "DESCUENTO DEL BENEFICIO DE ALIMENTACIÓN",
        body: (
          <>
            <p className="font-bold">¿Cuando faltan por cualquier índole el pago de alimentación se descuenta? Sé que por enfermedad y vacaciones se pagan, ¿pero si es por otra cosa la falta?</p>
            <p className="mt-2">Se pueden descontar porque el beneficio de alimentación corresponde a los trabajadores por jornada efectiva de trabajo. Así que si un trabajador falta para acudir a una consulta médica, asistir al odontólogo (estética), llevar a un hijo al médico, se le puede descontar el pago del beneficio de alimentación que correspondería a ese día.</p>
          </>
        ),
      },
      {
        heading: "MODALIDADES DE OTORGAMIENTO DEL BENEFICIO",
        body: (
          <>
            <p>El beneficio de alimentación es de obligatorio otorgamiento para los trabajadores, independientemente del número de trabajadores que ocupe el empleador. La ley de alimentación prevé distintas modalidades a las que puede optar el empleador para otorgar el beneficio (art. 4 LAT):</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Comedores</li>
              <li>Contratación de servicio de comida elaborada</li>
              <li>Cupones, tickets o tarjetas electrónicas de alimentación</li>
              <li>Dinero en efectivo sólo en los siguientes casos: cuando el empleador ocupe menos de 20 trabajadores y se le dificulte otorgar el beneficio mediante las otras modalidades y cuando a los trabajadores se les dificulte acceder a los establecimientos para canjear los cupones, tickets o tarjetas de alimentación, sin importar el número de trabajadores que ocupe el empleador.</li>
            </ul>
          </>
        ),
      },
      {
        heading: "COMPENSACIÓN POR TRABAJAR UN DÍA DE DESCANSO (SÁBADO)",
        body: (
          <>
            <p className="font-bold">En nuestra empresa que cumple horario de 8:00 AM a 12:00 M y de 1:00 PM a 5:00 PM sábado y domingo libre. Si trabajamos un día sábado para realizar un trabajo especial donde participamos todos los trabajadores de oficina. Este día lo pagamos normal y se les dio un día libre más en el disfrute de sus vacaciones, y se le pagó un día más de bono de alimentación. ¿Es esto lo correcto?</p>
            <p className="mt-2">Cuando un trabajador labora en su día de descanso obligatorio, en este caso un día sábado, debe ser remunerado de la siguiente forma: de conformidad con el Art. 120 LOTTT, el trabajador tendrá derecho al salario correspondiente a ese día y además al que le corresponda por razón del trabajo realizado, calculado con recargo del cincuenta por ciento sobre el salario normal. Es decir, se le paga el día sábado por ser un día de descanso, que de acuerdo al Art. 119 LOTTT y Art. 13 RPLOTTT, debe ser remunerado. Si el trabajador recibe una remuneración mensual, este pago está incluido (30 días del mes, calendario comercial de 360 días), y se le debe pagar el salario correspondiente por el trabajo realizado con un 50% de recargo.</p>
            <p className="mt-2">Se le debe otorgar un día adicional de beneficio de alimentación por haber prestado sus servicios de forma efectiva un día adicional. Debido a que los trabajadores prestaron su servicio el día que les correspondía su día de descanso semanal obligatorio se les debe otorgar un día de descanso compensatorio en la semana inmediatamente siguiente; este día debe ser remunerado como un día normal de trabajo, sin recargo alguno (Art. 188 LOTTT). Es como cambiar el día de descanso por otro día en la semana. No se puede sustituir el descanso compensatorio con ningún otro beneficio de otra naturaleza: los trabajadores deben descansar. Por este día no se otorga beneficio de alimentación, ya que el trabajador no presta sus servicios, a menos que sea una práctica de la empresa como una forma de otorgar un mayor beneficio.</p>
            <p className="mt-2">En cuanto a otorgar un día adicional de disfrute de vacaciones, esto no es obligatorio; se aplica sólo de forma excepcional para aquellas empresas que deben laborar jornadas de 6 días a la semana (Art. 13 RPLOTTT).</p>
          </>
        ),
      },
      {
        heading: "FUNCIONARIO PÚBLICO, REPOSOS Y PAGO DEL BENEFICIO",
        body: (
          <>
            <p className="font-bold">Soy funcionaria pública, estuve 52 semanas de reposo y me reincorporé faltando un mes para vencer mis vacaciones. Me deben vacaciones vencidas del año pasado y las del año en curso. Me dicen que no pueden otorgármelas y que si vuelvo a salir de reposo por la misma lesión ya no están obligados a pagar el cestaticket. ¿Qué asesoría me pueden dar?</p>
            <p className="mt-2">De acuerdo al Art. 16 del Reglamento General de la Carrera Administrativa (RGLCA) el periodo de faltas justificadas al trabajo (enfermedad) no se considera interrupción del periodo anual para tomar las vacaciones, tal cual como lo establece el Art. 202 LOTTT. Los funcionarios se rigen por la Ley del Estatuto de la Función Pública y en lo no previsto se aplica la LOTTT (Art. 6 LOTTT). Puedes solicitar tus vacaciones y acordar con el Jefe de la Dependencia la oportunidad de disfrute; a falta de acuerdo, la decisión definitiva corresponderá al Jefe de la Dependencia (Art. 20 RGLCA).</p>
            <p className="mt-2">En cuanto al reposo, si luego de 52 semanas te reincorporas al trabajo y luego vuelves a requerir reposo (aun por la misma lesión), la organización debe pagarte tu beneficio de alimentación y la diferencia entre el monto de la prestación dineraria del IVSS y tu salario, ya que se trata de un nuevo reposo.</p>
          </>
        ),
      },
      {
        heading: "BENEFICIO DE ALIMENTACIÓN EN JORNADA PARCIAL",
        body: (
          <>
            <p className="font-bold">¿Cómo se paga el cesta ticket cuando el trabajador labora una jornada parcial?</p>
            <p className="mt-2">El Art. 18 del Reglamento de la Ley de Alimentación establece que cuando el trabajador labore una jornada inferior a los límites diarios establecidos, cuando el beneficio se otorga mediante tickets, tarjetas o dinero en efectivo, el mismo se prorrateará por el número de horas efectivas trabajadas. Ejemplo: por 4 horas de trabajo corresponderá la mitad del beneficio de alimentación. El empleador puede de forma voluntaria pagar un salario mayor (como si trabajara la jornada completa) o pagar el beneficio de alimentación completo. Si el beneficio se otorga mediante el plato de comida, el mismo será otorgado en su integridad.</p>
          </>
        ),
      },
      {
        heading: "HORAS EXTRAS Y BENEFICIO DE ALIMENTACIÓN",
        body: (
          <>
            <p className="font-bold">Soy trabajador de una empresa de vigilancia con horario 4x3 en jornadas de 12 horas y solo me pagan 2 horas de descanso adicionales. ¿Me corresponde el pago de horas extras y ticket y medio de alimentación por jornada?</p>
            <p className="mt-2">La jornada máxima de trabajo es de 11 horas (Art. 175 LOTTT y Art. 8 RPLOTTT). Es importante definir bien las funciones que cumples para verificar que estés dentro del supuesto de horario especial. Si trabajas más de 11 horas te corresponde el pago de horas extras. Si trabajas más de 8 horas, de acuerdo con el Art. 18 del Reglamento de la Ley de Alimentación te corresponde el pago de forma prorrateada por el número efectivo de horas laboradas. Por ejemplo: por 12 horas de trabajo corresponde un ticket alimentación y medio (porque una jornada normal es de 8 horas).</p>
          </>
        ),
      },
      {
        heading: "DERECHOS ADQUIRIDOS DE LOS TRABAJADORES",
        body: (
          <>
            <p className="font-bold">Actualmente venimos descontando el bono nocturno y cesta ticket del día que descansa por compensatorio de sábado laborado. Antes lo pagábamos. ¿Este cambio pudo generar algún derecho adquirido?</p>
            <p className="mt-2">Cuando un trabajador presta sus servicios un día que le corresponde su descanso semanal, tendrá derecho a un día de descanso compensatorio y de salario (Art. 188 LOTTT). El pago del bono nocturno y del beneficio de alimentación procede cuando el trabajador presta sus servicios efectivamente, por lo cual no serán pagados cuando está descansando. Si la empresa venía pagando estos conceptos, por error o desconocimiento, y mantuvo esa práctica por lo menos un año (Art. 8 Reglamento LOT), no podrá alegar su “error”, ya que por el transcurrir del tiempo los trabajadores han adquirido el derecho a percibir dichas remuneraciones. Ante un cambio o “corrección del error” (si ha pasado más de un año), los trabajadores pueden alegar una desmejora laboral.</p>
          </>
        ),
      },
      {
        heading: "DÍAS DE DESCANSO Y FERIADOS EN EL PERIODO VACACIONAL",
        body: (
          <>
            <p className="font-bold">Un trabajador con tres años o más de servicio, con sábados y domingos libres, ¿qué debe recibir por vacaciones?</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>15 días de disfrute remunerados + 1 día adicional por cada año de servicio.</li>
              <li>15 días de bono vacacional + 1 día adicional por cada año de servicio.</li>
              <li>Días de descanso y feriados comprendidos en el periodo de vacaciones, también remunerados.</li>
              <li>Beneficio de alimentación por los días de disfrute de vacaciones.</li>
            </ul>
          </>
        ),
      },
      {
        heading: "PAGO DEL BENEFICIO DURANTE PROCEDIMIENTO DE REENGANCHE",
        body: (
          <>
            <p className="font-bold">A varios compañeros los despidieron injustificadamente, lograron el reenganche pero no les pagaron el cesta ticket de los meses que estuvieron fuera. ¿Se los deben pagar?</p>
            <p className="mt-2">Cuando el beneficio de alimentación sea otorgado mediante cupones, tickets o tarjetas electrónicas, la no prestación del servicio por causas no imputables al trabajador no será motivo para la suspensión del otorgamiento del beneficio correspondiente a esa jornada, más aún cuando se trata de un despido injustificado, al cual siguió un procedimiento de calificación de despido con la consecuente orden de reenganche y restitución de derechos laborales, incluido el beneficio de alimentación. Si no se ha hecho plenamente efectiva la restitución, deben acudir nuevamente a la Inspectoría del Trabajo que conoció el caso y hacer la denuncia correspondiente. Art. 425 LOTTT y Art. 6 Ley de Alimentación para los Trabajadores, G.O. Nº 39.666 del 04 de mayo de 2011.</p>
          </>
        ),
      },
      {
        heading: "BENEFICIO DE ALIMENTACIÓN ANTE ACCIDENTE LABORAL",
        body: (
          <>
            <p className="font-bold">Cuando ocurre un accidente laboral y el médico envía reposo de 7 a 10 días, ¿el patrono está obligado a pagar el cestaticket?</p>
            <p className="mt-2">Cuando el beneficio sea otorgado mediante cupones, tickets o tarjetas electrónicas de alimentación, la no prestación del servicio por causas no imputables al trabajador o trabajadora, como es el caso de accidente o enfermedad, no será motivo para la suspensión del otorgamiento del beneficio correspondiente a esa jornada, más aún cuando se trata de un accidente laboral. Art. 73 literal a) LOTTT y Art. 6 Ley de Alimentación para los Trabajadores, G.O. Nº 39.666 del 04 de mayo de 2011.</p>
          </>
        ),
      },
      {
        heading: "PAGO DEL BENEFICIO EN DÍA FERIADO",
        body: (
          <>
            <p className="font-bold">Las trabajadoras laboraron un día feriado medio tiempo, de 8 a 12 M. El día se paga doble, ¿y el bono de alimentación y transporte también?</p>
            <p className="mt-2">No. El beneficio de alimentación se les debe pagar de forma simple, según lo pautado para media jornada de trabajo: por media jornada corresponderá la mitad. De igual forma se procederá con el bono de transporte.</p>
          </>
        ),
      },
      {
        heading: "BENEFICIO DE ALIMENTACIÓN EN EFECTIVO",
        body: (
          <>
            <p className="font-bold">Trabajo en un restaurante y nos dan la comida. ¿La empresa no está obligada a dar cesta ticket durante las vacaciones?</p>
            <p className="mt-2">El beneficio de alimentación debe otorgarse durante el periodo vacacional. Si la empresa otorga el beneficio mediante alimentación, durante el periodo de vacaciones puede otorgarlo bien sea mediante tickets o en efectivo. Este pago del beneficio en efectivo no se considera salario.</p>
          </>
        ),
      },
      {
        heading: "PAGO DEL BENEFICIO POR DÍAS DE DESCANSO",
        body: (
          <>
            <p className="font-bold">Hasta ahora trabajo de lunes a sábado y percibo 6 tickets por semana. Una vez que empiece de lunes a viernes, ¿bajarán los tickets a 5?</p>
            <p className="mt-2">Efectivamente, serán 5 tickets a la semana, a menos que el empleador voluntariamente continúe pagando los 6, aunque está obligado a pagar sólo 5. Se supone que debe aumentar el descanso, la integración familiar y la calidad de vida.</p>
          </>
        ),
      },
      {
        heading: "PAGO DEL BENEFICIO DURANTE REPOSO POST NATAL",
        body: (
          <>
            <p className="font-bold">Si estoy de reposo postnatal, ¿cuántos días de cestatickets deben pagarme?</p>
            <p className="mt-2">Durante el reposo pre y post natal se debe pagar el beneficio de alimentación tal cual como si la trabajadora estuviera laborando efectivamente.</p>
          </>
        ),
      },
      {
        heading: "PAGO DE CESTA TICKETS EN VACACIONES (OPORTUNIDAD DEL PAGO)",
        body: (
          <>
            <p className="font-bold">Estoy saliendo de vacaciones un 15. ¿Me pagan de una vez los cesta tickets de esos quince días o debo esperar al último?</p>
            <p className="mt-2">El beneficio de alimentación se debe pagar al inicio de las vacaciones.</p>
          </>
        ),
      },
      {
        heading: "BENEFICIO DE ALIMENTACIÓN DURANTE EL PREAVISO",
        body: (
          <>
            <p className="font-bold">Después de introducir la renuncia y cumplir el periodo de preaviso, ¿los días laborados dentro del preaviso cuentan para el bono alimenticio?</p>
            <p className="mt-2">Sí. El beneficio de alimentación corresponde al trabajador por jornada de trabajo; el hecho de estar “pagando el preaviso” no significa que no está trabajando, ya que presta sus servicios de forma regular, a menos que solicite el permiso de medio día interdiario para diligencias de obtención de nuevo empleo (Art. 36 RLOT), en cuyo caso esos días recibirá el beneficio correspondiente a la media jornada trabajada.</p>
          </>
        ),
      },
      {
        heading: "BONO DE ALIMENTACIÓN DURANTE EL DESCANSO SEMANAL",
        body: (
          <>
            <p className="font-bold">¿Los dos días de descanso semanal continuos cuentan para el bono alimentario?</p>
            <p className="mt-2">El beneficio de alimentación se otorga por jornada laborada, razón por la cual no se recibe el beneficio los días que se está de descanso semanal. Así que por los dos días de descanso semanal no se recibirá el beneficio de alimentación, a menos que el empleador decida otorgarlos de forma voluntaria o que se modifique la reglamentación actual.</p>
          </>
        ),
      },
    ],
    extraCta: { label: "Ver Guía de Beneficio de Alimentación ($15)", to: "/recursos/guias#beneficio-alimentacion" },
  },
  despido: {
    intro:
      "Preguntas frecuentes sobre despido justificado e injustificado, procedimientos de calificación, reenganche, indemnizaciones y reclamos, con base en la LOTTT y la jurisprudencia de la Sala de Casación Social.",
    sections: [
      {
        heading: "DESPIDO JUSTIFICADO POR 3 DÍAS DE INASISTENCIA",
        body: (
          <>
            <p className="font-bold">¿Cómo se cuentan los 3 días de inasistencia para un despido justificado?</p>
            <p className="mt-2">Se cuenta a partir de la primera inasistencia y de allí en adelante hasta la tercera inasistencia dentro de 30 días continuos.</p>
            <p className="mt-2">La enfermedad del trabajador o trabajadora se considerará causa justificada de inasistencia al trabajo. El trabajador o trabajadora deberá, siempre que no existan circunstancias que lo impidan, notificar al patrono o patrona la causa que lo imposibilite para asistir al trabajo.</p>
            <p className="mt-3 font-semibold">Causas justificadas de despido (Art. 79 LOTTT)</p>
            <p className="mt-2">Serán causas justificadas de despido, los siguientes hechos del trabajador o trabajadora:</p>
            <p className="mt-2 italic">f) Inasistencia injustificada al trabajo durante tres días hábiles en el período de un mes, el cual se computará a partir de la primera inasistencia. La enfermedad del trabajador o trabajadora se considerará causa justificada de inasistencia al trabajo. El trabajador o trabajadora deberá, siempre que no existan circunstancias que lo impida, notificar al patrono o a la patrona la causa que lo imposibilite para asistir al trabajo.</p>
          </>
        ),
      },
      {
        heading: "DESPIDO POR ACOSO LABORAL",
        body: (
          <>
            <p className="font-bold">¿Puedo despedir a un trabajador por acoso laboral?</p>
            <p className="mt-2">El acoso laboral o “mobbing” es efectivamente una causal de despido justificada (Art. 79 LOTTT, lit. j). El acoso laboral se materializa a través de conductas hostiles ejecutadas en forma reiterada en el tiempo, de mayor o menor intensidad y que dependiendo del tiempo y la intensidad con que se ejecuten, pueden llegar a afectar la esfera de intereses del trabajador en cuanto a su integridad, intimidad, honor, entre otros.</p>
            <p className="mt-2">La Sala Social del Tribunal Supremo de Justicia, mediante sentencia número 674 de fecha 05 de mayo de 2009, estableció con respecto al tema lo siguiente:</p>
            <p className="mt-2 italic">"En ese sentido, observa la Sala que el 'mobbing' es aquella situación en la que una persona o un grupo de personas ejercen violencia psicológica extrema de forma sistemática (al menos una vez por semana), durante un tiempo prolongado (más de 6 meses) sobre otra persona en el lugar de trabajo."</p>
          </>
        ),
      },
      {
        heading: "TIEMPO PARA NOTIFICAR UNA INASISTENCIA JUSTIFICADA",
        body: (
          <>
            <p className="font-bold">¿Cuánto tiempo tiene el trabajador para notificar su inasistencia justificada?</p>
            <p className="mt-2">El trabajador o trabajadora deberá, siempre que no existan circunstancias que lo impidan, notificar al patrono o patrona la causa que lo imposibilite para asistir al trabajo. Art. 37 RLOT, Parágrafo Único: con el objeto de evitar eventuales medidas disciplinarias, el trabajador deberá notificar al empleador, dentro de los dos (2) días hábiles siguientes, la causa que justifique su inasistencia al trabajo.</p>
          </>
        ),
      },
      {
        heading: "EMPLEADOS DE DIRECCIÓN: ¿LES CORRESPONDE INDEMNIZACIÓN EN CASO DE DESPIDO?",
        body: (
          <>
            <p className="font-bold">Un gerente que laboró por 13 años consecutivos y es despedido, ¿tiene derecho a la indemnización del Art. 92 LOTTT?</p>
            <p className="mt-2">Lo primero es verificar si este gerente es en realidad un empleado de dirección. Debemos acudir al principio de la primacía de la realidad sobre las formas.</p>
            <p className="mt-2 italic">Artículo 37 LOTTT: Se entiende por trabajador o trabajadora de dirección el que interviene en la toma de decisiones u orientaciones de la entidad de trabajo, así como el que tiene el carácter de representante del patrono o patrona frente a otros trabajadores, trabajadoras o terceros, y puede sustituirlo o sustituirlas, en todo o en parte, en sus funciones.</p>
            <p className="mt-2">El Art. 87 LOTTT establece que los empleados de dirección no están amparados por la estabilidad laboral, por lo tanto en caso de despido quedan excluidos del pago de indemnización alguna, debiendo pagarle en todo caso sus prestaciones sociales y demás beneficios como vacaciones, bono vacacional y utilidades que se le adeuden.</p>
            <p className="mt-2">Sala de Casación Social, sentencia Nº 2145 del 16 de diciembre de 2008:</p>
            <p className="mt-2 italic">"Así, pues, los empleados de dirección conforman una categoría que no disfruta de algunos beneficios que sí son percibidos por la mayor parte de los trabajadores, y visto que uno de los principios que informa la Ley Orgánica del Trabajo vigente es el de proporcionar estabilidad al mayor número de trabajadores, debe considerarse que la condición de empleado de dirección es de carácter excepcional y por tanto restringida; en este sentido, la noción de empleado de dirección es aplicable únicamente a los altos ejecutivos o gerentes de las empresas, que participan en lo que se conoce como 'las grandes decisiones', es decir, en la planificación de la estrategia de producción, en la selección, contratación, remuneración o movimiento de personal, en la representación de la empresa y en la realización de actos de disposición de su patrimonio."</p>
            <p className="mt-2 italic">"Así pues, en virtud del cargo que ostentó el demandante en la empresa demandada, no goza del régimen de estabilidad laboral de acuerdo con lo establecido en el artículo 112 de la Ley Orgánica del Trabajo*, y en consecuencia pueden ser despedidos sin justa causa, sin que se produzcan los efectos patrimoniales establecidos en el artículo 125** eiusdem, referido a las indemnizaciones por despido injustificado y sustitutiva del preaviso, propias de los trabajadores que sí gozan de estabilidad en el trabajo y que han sido despedidos sin causa legal que lo justifique."</p>
            <p className="mt-2 text-sm text-muted-foreground">*Art. 87 LOTTT — **Art. 92 LOTTT</p>
          </>
        ),
      },
      {
        heading: "TRABAJADOR BACHAQUERO",
        body: (
          <>
            <p className="font-bold">¿Está obligado el patrono a otorgar permiso a un trabajador todos los jueves para ir a comprar “bachaquear”, siendo un trabajador clave del que dependen los demás?</p>
            <p className="mt-2">No es obligatorio. Al ser un trabajador clave del cual depende el trabajo de otros y la producción, se considera abandono de trabajo, causal de despido justificado del Art. 79 LOTTT. Recomendación: negarle el permiso por escrito y, cuando falte, se considera abandono de trabajo e iniciar el procedimiento de calificación. Otra opción más flexible, entendiendo la situación país, es que otro trabajador lo sustituya y se le otorgue permiso no remunerado, pero ello dependerá de la entidad de trabajo como un beneficio adicional.</p>
          </>
        ),
      },
      {
        heading: "DESCUENTO POR INCUMPLIMIENTO DE HORARIO DE TRABAJO",
        body: (
          <>
            <p className="font-bold">Los trabajadores presentan retrasos continuos a la hora de entrada. ¿Se puede descontar ese tiempo de retraso?</p>
            <p className="mt-2">Sí se puede, si está establecido en un reglamento interno de la organización. La sanción establecida en estos casos en el Reglamento de la LOT es la apertura del procedimiento de calificación de faltas cuando el trabajador no cumpla con el horario de trabajo en 4 o más oportunidades en un mes.</p>
          </>
        ),
      },
      {
        heading: "¿SE PUEDEN DESCONTAR LOS DÍAS DE INASISTENCIA AL TRABAJO?",
        body: (
          <>
            <p className="font-bold">Tenemos trabajadores que faltan y traen un récipe como justificativo, a veces reposos de 48 horas. ¿A partir de cuántos días debe avalarlo el seguro social? ¿Todo reposo se paga o se puede descontar?</p>
            <p className="mt-2">Las inasistencias al trabajo y reposos de hasta 3 días pueden ser descontados por el empleador, ya que el trabajador no prestó sus servicios. El salario es la remuneración por el servicio prestado por el trabajador (Art. 104 LOTTT).</p>
            <p className="mt-2">Estos reposos o justificativos médicos sólo sirven para justificar la falta del trabajador, debido a que la enfermedad es causa de inasistencia justificada al trabajo (Art. 70 literal F LOTTT). Estas faltas, aun cuando se acumulen 3 en el transcurso de un mes, no serán causal de despido.</p>
            <p className="mt-2">Los reposos deben ser convalidados por el IVSS cuando sean mayores a 3 días, ya que el IVSS sólo otorga prestación dineraria a partir del cuarto día de reposo médico. Es importante detallar en los recibos de pago el descuento que se hace al trabajador por las faltas justificadas al trabajo.</p>
          </>
        ),
      },
      {
        heading: "¿CUÁNDO SE PUEDE SOLICITAR REENGANCHE? ¿CÓMO RECLAMAR EL PAGO DE PRESTACIONES?",
        body: (
          <>
            <p className="font-bold">Renuncié a mi trabajo por otro que me ofertaron mejor, no he recibido liquidación. ¿Puedo solicitar el reenganche en el trabajo anterior?</p>
            <p className="mt-2">Primero que nada, no puedes solicitar reenganche. El reenganche (restitución del trabajador a su puesto de trabajo) es procedente en caso de despidos injustificados o retiros justificados y luego de seguir el procedimiento correspondiente.</p>
            <p className="mt-2"><strong>Trabajadores con inamovilidad:</strong> deberán solicitar dentro de los 30 días continuos siguientes a la desmejora o despido, la calificación como injustificado ante el Inspector del Trabajo, quien de calificarlo así ordenará el reenganche y pago de salarios caídos y demás beneficios dejados de percibir.</p>
            <p className="mt-2"><strong>Trabajadores con estabilidad:</strong> deberán, en caso de despido injustificado, acudir ante el Juez del Trabajo dentro de los 10 días continuos siguientes al despido, para seguir el procedimiento de estabilidad laboral. Si el despido se determina injustificado, el Juez ordenará el reenganche y pago de salarios caídos.</p>
            <p className="mt-2">Si un trabajador renuncia de forma voluntaria NO PUEDE SOLICITAR REENGANCHE. Tampoco puede solicitar reenganche si en caso de despido acepta de forma voluntaria la indemnización por un monto igual al que le correspondería por sus prestaciones sociales.</p>
            <p className="mt-3 font-semibold">Reclamo del pago de prestaciones sociales</p>
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>Se puede realizar dentro de los 10 años siguientes a la terminación de la prestación de servicios (Art. 51 LOTTT). En la LOT (anterior) el lapso era de 1 año.</li>
              <li>Es importante no dejar pasar mucho tiempo para iniciar el reclamo, ya que las entidades de trabajo se pueden insolventar. Además, sólo las prestaciones sociales prescriben a los 10 años; pueden haber otros derechos que podrías perder.</li>
              <li>El reclamo se puede hacer por distintas vías:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Demanda judicial ante los Tribunales Laborales por cobro de prestaciones sociales; acudir ante un abogado especialista en materia laboral.</li>
                  <li>Reclamo ante la Inspectoría del Trabajo.</li>
                  <li>Transacción laboral homologada por el Inspector del Trabajo o un Juez Laboral.</li>
                </ul>
              </li>
            </ol>
          </>
        ),
      },
      {
        heading: "DESPIDO JUSTIFICADO E INDEMNIZACIÓN",
        body: (
          <>
            <p className="font-bold">¿Si un trabajador es despedido por causa justificada, no se le debe pagar el doble de las prestaciones?</p>
            <p className="mt-2">Si el trabajador ha incurrido en alguna causal de despido justificado (Art. 79 LOTTT), la organización debe seguir el procedimiento correspondiente, dependiendo de si está amparado por estabilidad (Art. 87 LOTTT) o inamovilidad laboral (Art. 94 LOTTT). De no hacerlo, se considerará que la empresa reconoce que el despido se hizo sin justa causa (aun cuando en la realidad exista causa justificada para el despido).</p>
            <p className="mt-2">En todo caso, el trabajador puede iniciar el procedimiento de calificación del despido ante el juez (en caso de estabilidad) o el inspector del trabajo (si goza de inamovilidad), solicitando el reenganche y el pago de los salarios caídos. Si se sigue el procedimiento correspondiente y el despido es calificado como justificado, no será procedente el pago de indemnización alguna.</p>
          </>
        ),
      },
      {
        heading: "CÓMO HACER PARA QUE PAGUEN UNA LIQUIDACIÓN",
        body: (
          <>
            <p className="font-bold">Renuncié en enero de 2013 con 8 años de servicio y aún no me han dado la liquidación. ¿Qué debo hacer? ¿Puedo solicitar reenganche?</p>
            <p className="mt-2"><strong>Sobre el reenganche:</strong> cuando hay renuncia voluntaria (injustificada) no hay lugar a reenganche. Si se trata de una renuncia justificada en alguno de los supuestos del Art. 80 LOTTT, el trabajador tiene derecho a recibir además de sus prestaciones sociales, un monto equivalente a estas por concepto de indemnización. En caso de despido indirecto el trabajador puede iniciar el procedimiento de calificación de despido y solicitar el reenganche y reposición de sus derechos o condiciones de trabajo. Los trabajadores amparados por inamovilidad deben iniciar el procedimiento dentro de los 30 días continuos siguientes al despido o desmejora.</p>
            <p className="mt-2"><strong>Sobre el reclamo de prestaciones:</strong> se puede realizar dentro de los 10 años siguientes a la terminación de la prestación de servicios (Art. 51 LOTTT). Es importante no dejar pasar mucho tiempo. Vías: demanda judicial ante los Tribunales Laborales, reclamo ante la Inspectoría del Trabajo o transacción laboral homologada por el Inspector del Trabajo o un Juez Laboral. Lo importante es acudir a un abogado especialista que estudie el caso.</p>
          </>
        ),
      },
      {
        heading: "DESPIDO DURANTE REPOSO",
        body: (
          <>
            <p className="font-bold">Una maestra está de reposo durante el año escolar. ¿Se puede despedir, ya que afecta a los estudiantes?</p>
            <p className="mt-2">Se debe contratar a un suplente a fin de no afectar a los estudiantes. No se puede despedir a un trabajador durante un reposo (Art. 74 LOTTT).</p>
          </>
        ),
      },
      {
        heading: "REENGANCHE SIN PAGO DE SALARIOS CAÍDOS",
        body: (
          <>
            <p className="font-bold">Logré el reenganche pero llevo 3 semanas y no me han pagado los sueldos caídos ni demás beneficios. Además la empresa aumentó el sueldo y el cesta ticket. ¿Ese aumento me corresponde para el cálculo de salarios caídos?</p>
            <p className="mt-2">Si no se ha hecho plenamente efectiva la restitución de tus derechos como trabajador, debes acudir nuevamente a la Inspectoría del Trabajo que conoció el caso y hacer la denuncia correspondiente.</p>
          </>
        ),
      },
      {
        heading: "DESCUENTO DE FALTAS JUSTIFICADAS",
        body: (
          <>
            <p className="font-bold">¿Es legal que en una empresa privada descuenten las faltas justificadas?</p>
            <p className="mt-2">Sí es legal, ya que el salario es la contraprestación que recibe el trabajador por la prestación de sus servicios; si un día no trabaja, no presta servicio y por tanto el empleador no está obligado a pagar el salario. Si la falta es justificada, lo que significa es que la misma no podrá ser considerada como una causal de despido.</p>
          </>
        ),
      },
      {
        heading: "PAGO DEL BENEFICIO DE ALIMENTACIÓN DURANTE PROCEDIMIENTO DE REENGANCHE",
        body: (
          <>
            <p className="font-bold">A compañeros con más de 4 contratos continuos los despidieron injustificadamente. Lograron el reenganche tras 4 meses, les pagaron salarios caídos pero no el cestaticket. ¿Deben pagárselos?</p>
            <p className="mt-2">Cuando el beneficio de alimentación sea otorgado mediante la provisión o entrega de cupones, tickets o tarjetas electrónicas, la no prestación del servicio por causas no imputables al trabajador no será motivo para suspender el otorgamiento del beneficio correspondiente a esa jornada, más aún cuando se trata de un despido injustificado con orden de reenganche y restitución de los derechos laborales, incluido el beneficio de alimentación. Si no se ha hecho plenamente efectiva la restitución, deben acudir nuevamente a la Inspectoría del Trabajo que conoció el caso y hacer la denuncia correspondiente. Art. 425 LOTTT y Art. 6 Ley de Alimentación para los Trabajadores, G.O. Nº 39.666 del 04 de mayo de 2011.</p>
          </>
        ),
      },
      {
        heading: "NO REINCORPORACIÓN AL TRABAJO EN LA FECHA INDICADA EN EL RECIBO DE VACACIONES",
        body: (
          <>
            <p className="font-bold">¿Cuál es el basamento legal para amonestar a un trabajador que debía reintegrarse al trabajo terminadas sus vacaciones y no lo hizo el día señalado en su recibo de pago de vacaciones?</p>
            <p className="mt-2">Esta falta es una inasistencia injustificada al trabajo (Art. 79 literal F LOTTT), siempre y cuando el trabajador no la haya justificado (por ejemplo con un justificativo médico). Si el trabajador falta 3 veces de forma injustificada al trabajo en un periodo de 30 días, estamos ante una causal de despido justificado, con lo cual se puede iniciar un procedimiento de calificación de falta ante el Inspector del Trabajo.</p>
            <p className="mt-2">El disfrute de las vacaciones se interrumpe si el trabajador se encuentra inhabilitado para el trabajo (enfermedad o accidente), con lo cual se suspenden las vacaciones por el tiempo del reposo. El trabajador debe informar al empleador la causa de la suspensión y entregar los justificativos correspondientes, pudiendo reintegrarse en una fecha posterior a la indicada en su recibo de pago. Si se trata de una reincorporación uno o dos días después sin justificativo alguno, se le puede descontar el salario correspondiente a esos días. En cuanto al formato, se debe identificar al trabajador, la falta cometida e indicar que se trata de un llamado de atención por escrito, entregarlo al trabajador y que lo firme como recibido, quedándose con una copia.</p>
          </>
        ),
      },
    ],
    extraCta: { label: "Conocer la Asesoría Continua", to: "/servicios#asesoria-continua" },
  },
};

export const Route = createFileRoute("/recursos/temas/$slug")({
  loader: ({ params }) => {
    const tema = temas.find((t) => t.slug === params.slug);
    if (!tema) throw notFound();
    return tema;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Temas Laborales Venezuela | Díaz Pino` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: `${loaderData.title} | Díaz Pino` },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `https://diazpino.com/recursos/temas/${loaderData.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `https://diazpino.com/recursos/temas/${loaderData.slug}` }] : [],
    scripts: loaderData
      ? [{
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbLd([
            { name: "Inicio", path: "/" },
            { name: "Recursos", path: "/recursos" },
            { name: "Temas", path: "/recursos/temas" },
            { name: loaderData.title, path: `/recursos/temas/${loaderData.slug}` },
          ])),
        }]
      : [],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="container-page py-24 text-center">
        <h1>Tema no encontrado</h1>
        <Link to="/recursos/temas" className="btn-orange mt-6 inline-flex">Ver todos los temas</Link>
      </div>
    </Layout>
  ),
  component: TemaPage,
});

function TemaPage() {
  const tema = Route.useLoaderData();
  const article = articles[tema.slug];

  return (
    <Layout>
      <article className="py-14">
        <div className="container-page max-w-3xl">
          <Link to="/recursos/temas" className="text-brand text-sm font-semibold inline-flex items-center gap-1 hover:text-orange"><ArrowLeft size={16}/> Volver a temas</Link>
          <h1 className="mt-4 text-4xl md:text-5xl">{tema.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{article?.intro ?? tema.excerpt}</p>

          {article ? (
            <div className="mt-10 space-y-6">
              {article.qas?.map((qa, i) => (
                <div key={`qa-${i}`} className="card-soft p-6">
                  <p className="font-bold text-brand text-lg">{qa.q}</p>
                  <div className="mt-2 text-ink leading-relaxed">{qa.a}</div>
                </div>
              ))}
              {article.sections?.map((s, i) => (
                <div key={`s-${i}`} className="card-soft p-6">
                  <p className="font-bold text-brand text-lg">{s.heading}</p>
                  <div className="mt-2 text-ink leading-relaxed">{s.body}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="prose mt-8 text-ink space-y-4">
              <p>
                Este artículo forma parte de nuestro hub de temas laborales. Aquí explicamos, en lenguaje sencillo, cómo aplica la
                Ley Orgánica del Trabajo, los Trabajadores y las Trabajadoras (LOTTT) al tema <strong>{tema.title.toLowerCase()}</strong>,
                con los criterios más recientes de la jurisprudencia venezolana.
              </p>
              <p className="italic text-muted-foreground">
                (El contenido detallado de este artículo se publicará próximamente. Si necesitas resolver este tema en tu empresa hoy, escríbenos.)
              </p>
            </div>
          )}

          <div className="mt-12 card-soft p-8 bg-brand text-white">
            <h2 className="text-white text-2xl">¿Necesitas resolver esto en tu empresa?</h2>
            <p className="mt-2 text-white/85">Escríbenos por WhatsApp y te responde un abogado laboral especialista.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={waLink(`Hola, tengo una consulta sobre ${tema.title}.`)} target="_blank" rel="noopener" className="btn-orange"><MessageCircle size={18}/> Escríbenos por WhatsApp</a>
              {article?.extraCta ? (
                <Link to={article.extraCta.to} className="btn-outline-brand !border-white !text-white hover:!bg-white hover:!text-brand"><BookOpen size={18}/> {article.extraCta.label}</Link>
              ) : (
                <Link to="/recursos/guias" className="btn-outline-brand !border-white !text-white hover:!bg-white hover:!text-brand">Ver guías relacionadas</Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

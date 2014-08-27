package fi.hsl.parkandride.core.domain.fixture;

import java.util.HashMap;
import java.util.Map;

import fi.hsl.parkandride.core.domain.IdentifiedDomainObject;

public abstract class FixtureUtil {
    public static <T extends IdentifiedDomainObject> Map<Long, T> mapById(T... domainObjects) {
        Map<Long, T> map = new HashMap<>();
        for (T domainObject : domainObjects) {
            map.put(domainObject.getId(), domainObject);
        }
        return map;
    }
}